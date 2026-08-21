(function () {
  "use strict";
  var source = document.getElementById("pg034_sec001-source") || document.getElementById("pg036_sec001-source");
  if (!source) return;
  var markup = {
    "pg034_n0010": '1. Pronounce/sign the words <span class="source-example-accent">and</span>, and <span class="source-example-accent">end</span>.',
    "pg034_n0011": '2. Add a sound at the beginning of the following words: <span class="source-example-accent">and</span> , <span class="source-example-accent">end</span> /<br> Finger spell additional letters at the beginning of the following words: <span class="source-example-accent">and</span>, <span class="source-example-accent">end</span>. Make as many correct words as possible.',
    "pg034_n0012": 'Examples of the word <span class="source-example-accent">and</span>',
    "pg034_n0013": 'and- <span class="source-example-accent">h</span>and<br> and- <span class="source-example-accent">l</span>and',
    "pg036_n0002": 'Add appropriate letter sounds <span class="source-exercise-accent">s</span>, <span class="source-exercise-accent">b</span>, <span class="source-exercise-accent">c</span>, <span class="source-exercise-accent">d</span> and <span class="source-exercise-accent">f</span> at the beginning of each word to form correct words.'
  };
  var restoring = false;
  function restoreBookMarkup() {
    if (restoring) return;
    restoring = true;
    Object.keys(markup).forEach(function (dataId) {
      var node = source.querySelector('[data-id="' + dataId + '"]');
      if (!node || node.querySelector("[data-word-index], .bg-yellow-300")) return;
      if (!node.querySelector(".source-example-accent")) node.innerHTML = markup[dataId];
    });
    restoring = false;
  }
  var queued = false;
  var observer = new MutationObserver(function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      restoreBookMarkup();
    });
  });
  observer.observe(source, { childList: true, subtree: true, characterData: true });
  restoreBookMarkup();
})();
