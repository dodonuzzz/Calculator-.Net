<div id="hesapMakinesi">
    <div id="ekran">
        <input type="text" id="sonuc">
    </div>
    <div id="sayilar">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>*</button>
    </div>
</div>
<script>
"use strict";
  var _sayilar = document.getElementsByTagName("button"),
    _sayiUzunluk = _sayilar.length,
    i = 0;

  for (i = 0; i < _sayiUzunluk; i++) {
    _sayilar[i].onclick = hesapla;
  }
</script>