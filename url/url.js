const url = "https://studentki.ru/teens/hui";

function devidedStudentki(url) {
  const [protocol, _, host, ...path] = url.split('/');
  console.log(protocol.replace(":", ""));
  console.log(host);
  console.log(`/${path.join('/')}`);
}

devidedStudentki(url);




		
	

