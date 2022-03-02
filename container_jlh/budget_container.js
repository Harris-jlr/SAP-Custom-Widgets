(function()  {
	let tmpl = document.createElement('template');
	tmpl.innerHTML = `
		<style>
		.bg-blue-100 {
			background-color: #ebf8ff;
		  }
		  .border-blue-200 {
			border: 1px solid #bee3f8;
		  }
		  .bg-gray-100 {
			background-color: #f7fafc;
		  }
		  .bg-gray-300 {
			background-color: #e2e8f0;
		  }
		  .border-gray-300 {
			border: 1px solid #e2e8f0;
		  }
		  .bg-red-100 {
			background-color: #fff5f5;
		  }
		  .bg-red-200 {
			background-color: #fed7d7;
		  }
		  .border-red-300 {
			border: 1px solid rgb(254, 178, 178);
		  }
		  .bg-green-200 {
			background-color: #c6f6d5;
		  }
		  .text-gray-600 {
			color: #718096;
		  }
		  .text-gray-500 {
			color: #a0aec0;
		  }
		  .border-green-300 {
			border: 2px solid rgb(154, 230, 180);
		  }
		  .rounded-md {
			border-radius: 0.375rem;
		  }
		  .rounded-md-btrt {
			border-bottom-right-radius: 0.375rem;
		  }
		  .rounded-md-btlft {
			border-bottom-left-radius: 0.375rem;
		  }
		  .font-light {
			font-weight: 300;
		  }
		  .font-bold {
			font-weight: 700;
		  }
		  .text-xs {
			font-size: 0.75rem;
		  }
		  .text-sm {
			font-size: 0.875rem;
		  }
			
		  .text-lg {
			font-size: 1.125rem;
		  }
		  .text-xl {
			font-size: 1.25rem;
		  }
		  .w-50 {
			  width: 50%;
			  max-width: 100%;
		  }
		  .w-100 {
			  width: 100%;
			  padding: 0px;
		  }
		  .leading-3 {
			  line-height: .75rem;
		  }
		  .leading-5 {
			  line-height: 1.25rem;
		  }
		  .leading-8 {
			  line-height: 2rem;
		  }
		  .p-2 {
			padding: 0.5rem;
		  }
		  .p-4 {
			padding: 1rem;
		  }
		  .py-4 {
			 padding-right: 1rem;
			 padding-left: 1rem;
		  }
		  m-4 {
			margin: 1rem;
		  }
		  .row {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			width: 100%;
		  }
		  
		  .column {
			display: flex;
			flex-direction: column;
			flex-basis: 100%;
			flex: 1;
		  }
		  .oneline {
			margin-left: -1px;
		  }
		  .nooverlap-blue {
			outline-style: solid;
			outline-width: 1px;
			outline-color: #bee3f8;
		  }
		  .nooverlap-red {
			outline-style: solid;
			outline-width: 1px;
			outline-color: #feb2b2;
			color: #f56565;
		  }
		  .nooverlap-green {
			outline-style: solid;
			outline-width: 1px;
			outline-color: #9ae6b4;
			color: #48bb78;
		  }
		  .flex-container {
			padding: 0;
			margin: 0;
			list-style: none;
			
			-ms-box-orient: horizontal;
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -moz-flex;
			display: -webkit-flex;
			display: flex;
			  
			-webkit-justify-content: space-around;
			justify-content: space-around;
			-webkit-flex-flow: row wrap;
			flex-flow: row wrap;
			-webkit-align-items: stretch;
			align-items: stretch;
		  }
		  .flex-1 {
			  flex: 1 1 0%;
		  }	  
		</style>
		
		<h2>SAP CUSTOM WIDGET LAYOUT</h2>
<div class="flex-container">
	<!-- beginging of custom card -->
   	<div class="flex bg-gray-100 border-gray-300 rounded-md">
      	<div class="flex col">
        	<div class="flex text-sm py-4"><p class="font-light text-xl">{{ BU.name }}</p></div>
        	<div class="flex text-sm py-4"> <p class="font-bold text-xl">{{ BU.forcastAmnt }} <span class="text-xs font-light text-gray-500"> FCST </span></p></div>
        	<div class="flex text-sm py-4"> <p class="font-light text-lg">{{ BU.directAmnt }} <span class="text-xs font-light text-gray-500"> DIRECT</span> </p></div>
      	</div>
      	<div class="flex row">
        	<div class="flex-1 flex-grow p-4 bg-green-200 nooverlap-green rounded-md-btlft text-gray-600 text-sm"><span>KTLO</span> <br />
          		<span class="text-green-500">{{ BU.KTLO }}</span>
        	</div>
        	<div class="flex-1 flex-grow p-4 bg-red-200 nooverlap-red rounded-md-btrt text-gray-600 text-sm"><span>Initiatives</span> <br />
          		<span class="nowrap">{{BU.initiatives}} </span>
          
        	</div>
      	</div> 
  	</div>
	  <!-- beginging of custom card -->
   	<div class="flex bg-gray-100 border-gray-300 rounded-md">
      	<div class="flex col">
        	<div class="flex text-sm py-4"><p class="font-light text-xl">{{ BU.name }}</p></div>
        	<div class="flex text-sm py-4"> <p class="font-bold text-xl">{{ BU.forcastAmnt }} <span class="text-xs font-light text-gray-500"> FCST </span></p></div>
        	<div class="flex text-sm py-4"> <p class="font-light text-lg">{{ BU.directAmnt }} <span class="text-xs font-light text-gray-500"> DIRECT</span> </p></div>
      	</div>
      	<div class="flex row">
        	<div class="flex-1 flex-grow p-4 bg-green-200 nooverlap-green rounded-md-btlft text-gray-600 text-sm"><span>KTLO</span> <br />
          		<span class="text-green-500">{{ BU.KTLO }}</span>
        	</div>
        	<div class="flex-1 flex-grow p-4 bg-red-200 nooverlap-red rounded-md-btrt text-gray-600 text-sm"><span>Initiatives</span> <br />
          		<span class="nowrap">{{BU.initiatives}} </span>
          
        	</div>
      	</div> 
  	</div>
	  <!-- beginging of custom card -->
   	<div class="flex bg-gray-100 border-gray-300 rounded-md">
      	<div class="flex col">
        	<div class="flex text-sm py-4"><p class="font-light text-xl">{{ BU.name }}</p></div>
        	<div class="flex text-sm py-4"> <p class="font-bold text-xl">{{ BU.forcastAmnt }} <span class="text-xs font-light text-gray-500"> FCST </span></p></div>
        	<div class="flex text-sm py-4"> <p class="font-light text-lg">{{ BU.directAmnt }} <span class="text-xs font-light text-gray-500"> DIRECT</span> </p></div>
      	</div>
      	<div class="flex row">
        	<div class="flex-1 flex-grow p-4 bg-green-200 nooverlap-green rounded-md-btlft text-gray-600 text-sm"><span>KTLO</span> <br />
          		<span class="text-green-500">{{ BU.KTLO }}</span>
        	</div>
        	<div class="flex-1 flex-grow p-4 bg-red-200 nooverlap-red rounded-md-btrt text-gray-600 text-sm"><span>Initiatives</span> <br />
          		<span class="nowrap">{{BU.initiatives}} </span>
          
        	</div>
      	</div> 
  	</div>
</div>
	`;
	
		customElements.define('com-jlh-budget-container', class budgetContainer extends HTMLElement {
	
	
			constructor() {
				super(); 
				this._shadowRoot = this.attachShadow({mode: "open"});
				this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
				this._firstConnection = false;
			}
	
			//Fired when the widget is added to the html DOM of the page
			connectedCallback(){
				this._firstConnection = true;
				this.redraw();
			}
	
			 //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
			disconnectedCallback(){
			
			}
	
			 //When the custom widget is updated, the Custom Widget SDK framework executes this function first
			onCustomWidgetBeforeUpdate(oChangedProperties) {
	
			}
	
			//When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
			onCustomWidgetAfterUpdate(oChangedProperties) {
				if (this._firstConnection){
					this.redraw();
				}
			}
			
			//When the custom widget is removed from the canvas or the analytic application is closed
			onCustomWidgetDestroy(){
			}
	
			
			//When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
			// Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
			//  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
			/*
			onCustomWidgetResize(width, height){
				redraw()
			}
			*/
	
			redraw(){
			}
		});
	})();