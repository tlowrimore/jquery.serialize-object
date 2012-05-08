(function($) {
    var methods = {
        setValue: function(path, value, obj) {
            if(path.length) {
                var attr = path.shift();
                if(attr) {
                    obj[attr] = methods.setValue(path, value, obj[attr] || {});
                    return obj;
                } else {
                    if(obj.push) {
                        obj.push(value);
                        return obj;
                    } else {
                        return [value];
                    }
                }
            } else {
                return value;
            }
        }
    };
    
    $.fn.serializeObject = function() {
        var obj     = {},
            params  = this.serializeArray(),
            path    = null;
            
        $.each(params, function() {
            path = this.name.replace(/\]/g, "").split(/\[/);
            methods.setValue(path, this.value, obj);
        });
        
        return obj;
    };
})(jQuery);