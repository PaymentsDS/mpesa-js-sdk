export class Operation {
    static defaultProperties = [
        'name', 
        'method', 
        'port', 
        'path', 
        'inputMapping', 
        'input', 
        'output'
    ];
    
	constructor(args) {
		if (args !== null && args !== undefined) {
		
			for (let key of Operation.defaultProperties) {
				if (args.hasOwnProperty(key)) { 
				    this[key] = args[key]; 
				}
		    	}
		}
	}
	
	toURL() {
	    if (this.isValid()) {
		    let pathWithoudSlash = this.path.replace(/^\/+/, '');
		    return `:${this.port}/${pathWithoudSlash}`;
		}

		throw 'Uninitialized';
	}
		
	isValid() {
        return this.name != null && this.port != null && this.path != null;
	}
}
