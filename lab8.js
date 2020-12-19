Add = () => 
        {
            a = document.querySelector(".display").cloneNode(true);
            b = document.querySelector("#click");
            b.appendChild(a);
        };


        Save = (out) => 
        {

            Out = document.querySelector("#" + out);
            c = document.querySelectorAll(".input1");
            b = document.querySelectorAll(".input2");
            a = [];
            for (var i = 1; i < c.length; i++) {
                a.push(c[i].value + ":" + b[i].value)
            }
            console.log(JSON.stringify(a));
            a = JSON.stringify(a);
            a = '{' + a.slice(1, a.length - 1) + '}';
            Out.innerHTML = a;
        };

        Up = (me) => 
        {
            a = me.parentElement.previousElementSibling;
            if (a)
                me.parentElement.after(a);
        };

        Down = (me) => 
        {
            a = me.parentElement.nextElementSibling;
            if (a)
                me.parentElement.before(a);
        };

        Remove = (arg1) => 
        {
            arg1.parentElement.remove()
        };

        Add();