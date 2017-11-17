var fileSplitSize = 1024 * 1024;
var start=0,end=0;
var i=0;
// 文件段上传
function chunk_upload(button){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "/chunk_upload/upload/", false);
  xmlhttp.setRequestHeader("X-CSRFToken", button.form['csrfmiddlewaretoken'].value);
  var f = button.form;
  var file = f['file']['files'][0];
  var size=file.size;
  end=start+fileSplitSize;
  if(end>size){
    i=-1;
    end=size;
  }else{
    i+=1;
    end=end;
  }　　//按大小切割文件段
  var data= file.slice(start, end);
  var r=new FileReader();　　 r.readAsBinaryString(data);　　$(r).load(function(e){　　　　 var bolb=e.target.result;　　　　 var check=hex_md5(bolb);
    xmlhttp.setRequestHeader('charset','utf-8');
    xmlhttp.setRequestHeader("fileMD5", fileMD5);　　　　 xmlhttp.setRequestHeader("check", check);
    xmlhttp.setRequestHeader("start", start);
    xmlhttp.setRequestHeader("end", end);
    xmlhttp.send(data);

    if(xmlhttp.status==200){      　　
      if(end==size){          　　
        var backtext=xmlhttp.responseText;          　　
        alert(backtext);      　　
      }else{          　　
        alert("上传完成第"+i+"段")          　　
        start=end;          　　
        chunk_upload(button);      　　
      }    　　
    }else{       　　
      alert("上传错误");       　　
      chunk_upload(button);    　　
    }　　
  })
}
