export default{name:'o-modal',methods:{cancel:function(){this.model.cancel&&'function'==typeof this.model.cancel&&this.model.cancel()},confirm:function(){this.model.confirm&&'function'==typeof this.model.confirm&&this.model.confirm()}},model:{title:'',message:'',cancel:null,confirm:null},properties:{open:{enumerable:!0,value:function(a){this.model.cancel=a.cancel,this.model.confirm=a.confirm,this.model.title=a.title||'',this.model.message=a.message||'',a.cancel&&this.eCancel.classList.add('active'),a.confirm&&this.eConfirm.classList.add('active'),this.classList.add('active')}},close:{enumerable:!0,value:function(){this.model.title='',this.model.message='',this.model.cancel=null,this.model.confirm=null,this.classList.remove('active'),this.eCancel.classList.remove('active'),this.eConfirm.classList.remove('active')}}},created:function(){this.eCancel=this.querySelector('.o-modal-action[o-on-click="cancel"]'),this.eConfirm=this.querySelector('.o-modal-action[o-on-click="confirm"]')},style:'\n\t\t:host {\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\topacity: 0;\n\t\t\tz-index: -1;\n\t\t\twidth: 100%;\n    \t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tposition: fixed;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tbackground-color: var(--o-modal-background);\n\t\t}\n\t\t:host.active {\n\t\t\tz-index: 1;\n\t\t\topacity: 1;\n\t\t}\n\t\t.active .o-modal-body {\n\t\t\ttransform: translate(0, 0);\n\t\t}\n\t\t.o-modal-body {\n\t\t\tpadding: 1rem;\n\t\t\tflex: 0 0 300px;\n\t\t\ttransform: translate(50%, 50%);\n\t\t\tbackground-color: var(--o-modal-widget);\n\t\t\tbox-shadow: 0 3px 6px var(--o-modal-shadow);\n\t\t}\n\t\t.o-modal-title {\n\t\t\tpadding: 1rem 0;\n\t\t\tfont-weight: 300;\n\t\t\tfont-size: 1.3rem;\n\t\t\tcolor: currentColor;\n\t\t    word-break: break-word;\n\t\t    letter-spacing: 0.12rem;\n\t\t    text-transform: capitalize;\n\t\t}\n\t\t.o-modal-message {\n\t\t\tpadding: 1rem 0;\n\t\t\tcolor: currentColor;\n\t\t}\n\t\t.o-modal-actions {\n\t\t\tpadding: 1rem 0;\n\t\t    display: flex;\n\t\t    align-items: center;\n\t\t    justify-content: right;\n\t\t}\n\t\t.o-modal-action {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.o-modal-action.active {\n\t\t\tdisplay: block;\n\t\t}\n\t',template:'\n\t\t<div class="o-modal-body">\n\t\t\t<div class="o-modal-title" o-text="title"></div>\n\t\t\t<div class="o-modal-message" o-text="message"></div>\n\t\t\t<div class="o-modal-actions">\n\t\t\t\t<button class="o-modal-action" o-on-click="cancel">Cancel</button>\n\t\t\t\t<button class="o-modal-action" o-on-click="confirm">Confirm</button>\n\t\t\t</div>\n\t\t</div>\n\t'};