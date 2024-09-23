// Utilities
function ID(id) {
  return document.getElementById(id);
}
function N1(t,e) {
  return e.getElementsByTagName(t)[0];
}

// Upload class
var Up = {
	// configurable URL of the file upload handler
    // {'id': 1, 'url': 'https:...'}
	url: 'ws://localhost:8000/store',
	// configurable HTML template to render each uploaded file
	form_tpl: `<div class="upload__file">
        <div class="upload__file__wrap">
            <span class="upload__progress_bar"><i></i></span>
            <img class="upload__file__thumb" src="#thumb#">
        </div>
        <div>
            <label class="upload__delete" title="Mark for deletion">
                &times; <input type="checkbox" name="delete" id="deleteSUFFIX">
            </label>
        </div>
        <div class="upload__file__caption"><input type="text" name="altSUFFIX"></div>
        <input type="hidden" name="posSUFFIX">
        <input type="hidden" name="idSUFFIX">
    </div>
    `,
	// device and browser capability tests
	tests: {
		// is filereader supported
		filereader: typeof FileReader != 'undefined',
		// is drag and drop supported
		dnd: 'draggable' in document.createElement('span'),
		// will progress bars work
		progress: "upload" in new XMLHttpRequest
	},
	// handle adding file forms to a formset
	add_form: function(i){
		var list = ID('upload_list');
		var total = document.querySelectorAll('input[name="delete"]').length;
		var form = Up.form_tpl.replace(/SUFFIX/g, total),
			id = 'id' + total,
			tmp = document.createElement('div');
		tmp.innerHTML = form;
		form = tmp.firstChild;
		form.id = id;
		list.appendChild(form);
		sortable_uploads();
		Up.setup_delete(ID("delete"+total));
		return id;
	},
	setup_delete: function(btn) {
        btn.addEventListener('change', function() {
            if (this.checked) {
                var fileDiv = this.closest('.upload__file');
                fileDiv.parentNode.removeChild(fileDiv);
                // handle server-side deletion
            }
        });
    },
	fill_form: function(id, xhr_response){
		var data = JSON.parse(xhr_response); // safe source
		var box = ID(id);
		var img = N1('img', box);
		img.src = data.url;
		ID('id'+id).value = data.id;
	},
	post: function(i, data, id){
		return function(){
		    const socket = new WebSocket(Up.url);
            socket.onopen = function() {
                socket.send(data.get('file'));
            };
            socket.onmessage = function(event) {
                var resp = event.data;  // Handle the response from the server
                if (resp === 'error') {
                    var box = ID(id);
                    box.parentNode.removeChild(box);
                } else {
                    Up.fill_form(id, resp); // Update the UI
                }
            };
            socket.onerror = function(error) {
                console.error("WebSocket error: ", error);
            };
			// Progress bar TODO update to websocket / implement messages from the server
			// var bar = N1('span', ID(id));
			// var got = N1('i', bar);
			// bar.style.display = 'block';
			// xhr.onload = function() {
			// 	got.style.width = '100%';
			// 	setTimeout(function(){bar.style.display = 'none';}, 1000);
			// };
			// if(Up.tests.progress){
			// 	xhr.upload.onprogress = function(event){
			// 		if(event.lengthComputable){
			// 			var complete = (event.loaded / event.total * 140 | 0);
			// 			got.style.width = complete + 'px';
			// 		}
			// 	}
			// }
		}
	},
	read: function(files){
		var qs = [];
		for(var i=0; i < files.length; i++){
		    var file = files[i];
            var data = new FormData();
            data.append('file', file);
            var id = Up.add_form();
            if (file.type.startsWith('image/')) {
                var reader = new FileReader();
                reader.onload = (function(id) {
                    return function(e) {
                        var img = N1('img', ID(id)); // Get the thumbnail image element
                        img.src = e.target.result;   // Set the src to the file's data URL
                    };
                })(id);
                reader.readAsDataURL(file);
            } else {
                // For non-image files, display the file extension instead of the thumbnail
                var ext = file.name.split('.').pop().toUpperCase(); // Get the file extension
                var img = N1('img', ID(id));
                img.style.display = 'none';
                var wrap = ID(id).querySelector('.upload__file__wrap');
                var extEl = document.createElement('div');
                extEl.className = 'upload__file__ext';
                if(file.name.includes('.')) extEl.textContent = '.' + ext; // Show extension
                wrap.appendChild(extEl);
            }
            // prefill caption field with the filename
            document.querySelector('#'+id+' .upload__file__caption input').value = file.name;
            qs[i] = Up.post(i, data, id);
		}
		for(var j=0; j < qs.length; j++){
			qs[j](); // run requests
		}
	},
	load: function(){
		var d = ID('droparea'),
			file = ID('file');
		if(Up.tests.dnd && Up.tests.filereader){
			d.style.display = 'block';
			d.ondragover = function( ){
				this.className='upload__droparea hover';
				return false;
			}
			d.ondragend  = function( ){
				this.className='upload__droparea';
				return false;
			}
			d.ondrop = function(e){
				this.className='upload__droparea';
				e.preventDefault();
				Up.read(e.dataTransfer.files);
			}
		}
		if(Up.tests.filereader){
			var rm = document.getElementsByClassName('upload__fallback');
			for(var i=rm.length;i--;){rm[i].parentNode.removeChild(rm[i]);}
		}
		if(Up.tests.filereader){
			file.onchange = function(e){
				Up.read(e.target.files);
			}
		}
	}
}


function sortable_uploads(){
    var list = ID("upload_list");
    Sortable.create(list, {
        draggable: '.upload__file',
        onUpdate: function(evt){
            var inputs = document.querySelectorAll('input[name$="pos"]');
			for(var i=inputs.length; i--;){
				inputs[i].value = i;
			}
        }
    });
}


// Fire upload, when DOM ready
document.addEventListener('readystatechange', function(){
    if(document.readyState === 'complete'){
		Up.load(); // Fire
		sortable_uploads();
	}
}, false);


function handleDelete() {
    var deleteButtons = document.querySelectorAll('.upload__delete input[name="delete"]');

    deleteButtons.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                var fileDiv = this.closest('.upload__file');
                fileDiv.parentNode.removeChild(fileDiv);
                // Additional logic for deleting the file from the server can be added here
            }
        });
    });
}

