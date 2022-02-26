(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		</style>
	`;

	class HelloWorldAps extends HTMLElement {

        // this is a standard web components callback and is called once, at initial widget instantiation. 
        // In our template, it is where we attach out template to the shadow DOM. Fired first time only.
        constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
		}

        // Fired when the widget is added to the html DOM of the page and every time the widget is brought into focus.
        // this a standard web components callback and is fired whenever the widget is added to the HTML DOM. 
        // It should not be confused with the constructor(), which is fired the first time only. This callback is fired every time. 
        // So if the page where your widget lives is brought into focus and the widget is added to the DOM, this event will fire. 
        connectedCallback(){
            this.redraw();
        }

        // Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        // It is also fired when the widget is deleted from the DOM; such as when the panel that is lives in is closed or the user switched to another page, etc.
        disconnectedCallback(){
        
        }

        // When the custom widget is updated, the Custom Widget SDK framework executes this function first
        // When properties are changed, this callback is called BEFORE they are actually changed.
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        // When the custom widget is updated, the Custom Widget SDK framework executes this function after the update.
        // When properties are changed, this callback is called AFTER they are actually changed.
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
         // When the custom widget is removed from the canvas or the analytic application is closed
        // This is the mirror image of constructor().
        onCustomWidgetDestroy(){
        
        }

        redraw(

        );

	}

customElements.define("com-sap-sample-template'-aps", HelloWorldAps);
})();