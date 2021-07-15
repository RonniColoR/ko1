
function sortArrayByArray(a, b)
    {
        return order.indexOf(a) - order.indexOf(b);
    }
    var order = new Array('name', 'dob', 'address');
    var customer = new Array();
    customer['address'] = '123 fake st';
    customer['name'] = 'Tim';
    customer['dob'] = '12/08/1986';
    customer['dontSortMe'] = 'this value doesnt need to be sorted';
    var orderedKeys = Object.keys(customer).sort(sortArrayByArray);
    orderedKeys.forEach(function (key) {
        document.write(key + "=" + customer[key] + "<br/>");
    });
