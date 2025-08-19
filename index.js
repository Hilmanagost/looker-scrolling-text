function drawViz() {
  var container = document.getElementById('container');
  container.innerHTML = `
    <style>
      #scrollingText {
        display: inline-block;
        white-space: nowrap;
        animation: scroll 10000ms linear infinite;
        animation-direction: normal;
        color: #000000;
        font-size: 20px;
        background: #f8f9fa;
        padding: 10px;
      }
      .scrolling-text-item {
        display: flex;
        align-items: center;
      }
      @keyframes scroll {
        from { transform: translateX(100%); }
        to { transform: translateX(-100%); }
      }
    </style>
    <div id="scrollingText">
      <div class="scrolling-text-item">
        <p>Loss Amount dan Total Case adalah angka 'Amount Due' (angka setelah potong gaji) pada saat Kasus di Assign</p>
      </div>
    </div>
  `;
}

drawViz();
