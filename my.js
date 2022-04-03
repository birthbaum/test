function testGS(){
 
 const url = "https://script.google.com/macros/s/AKfycbwy8Zc4zEvICVHr-dKe0E9IeYbNDBzPTjMqFSlfBQ_3T67kXUntCz86NMc8i2zK5iEO1g/exec";

 fetch(url)
    .then(d => d.json()).then()
    .then(d => {

        document.getElementById("app").textContent = d[0].status;

    });
}

 function addGS(){
 
 const url = "https://script.google.com/macros/s/AKfycbwy8Zc4zEvICVHr-dKe0E9IeYbNDBzPTjMqFSlfBQ_3T67kXUntCz86NMc8i2zK5iEO1g/exec";

 fName = document.getElementById("inputfname").value;
 fGender = document.getElementById("inputgender").value;
 fGrade = document.getElementById("inputgl").value;
 fState = document.getElementById("inputstate").value;
 fMajor = document.getElementById("inputmajor").value;
 fExt = document.getElementById("inputext").value;


    fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({"Student Name":fName,"Gender":fGender,"Class Level":fGrade,"State":fState,"Major":fMajor,"Extracurricular Activity":fExt})
 });
  
}


document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);
