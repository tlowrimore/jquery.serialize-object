# Introduction #

jQuery.serialize-object provides functionality for serializing forms to objects.
This primarily targets frameworks like Ruby on Rails, where form-field names imply
an object graph.  If you are familiar with this practice, then you should assume that
a call to *serializeObject* will return a structure that looks very much like what
the request params will look like when unpacked by the server.

# Usage #

    $("#my-form").serializeObject();
    
# Example #

## The Form ##

    <form action="/users" method="post" id="users-form">
        <!-- User attributes -->
        <input type="text" name="user[first_name]" />
        <input type="text" name="user[last_name]" />
        
        <!-- Nested address attributes -->
        <input type="text" name="user[address][street]" />
        <input type="text" name="user[address][city]" />
        <input type="text" name="user[address][state]" />
        <input type="text" name="user[address][zip]" />
        
        <!-- List attributes -->
        <input type="checkbox" name="user[books][]" value="The Algorithm Design Manual" />
        <input type="checkbox" name="user[books][]" value="The Joy of Clojure" />
        <input type="checkbox" name="user[books][]" value="Purely Functional Data Structures" />
        
        <input type="submit" value="Save!" />
    </form>
    
## The Javascript ##

    $("#users-form").serializeObject();
    
## The Result ##

Assuming all text fields were filled-in, and all checkboxes were checked, this is what the
resulting object would look like:

    { 
        user: {
            first_name: "Kip",
            last_name:  "Winger",
            address: {
                street: "666 Hairspray Way",
                city:   "Beverly Hills",
                state:  "CA",
                zip:    "90210"
            },
            books: [
                "The Algorithm Design Manual",
                "The Joy of Clojure",
                "Purely Functional Data Structures"
            ]
        }
    }
    
# Thank You! #

Thanks for taking a look at this.  I hope you find it useful!

If you find errors in the code or in this README, please feel free to let me know.