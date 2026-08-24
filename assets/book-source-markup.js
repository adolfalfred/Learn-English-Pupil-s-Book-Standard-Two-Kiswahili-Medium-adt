(function () {
  "use strict";
  var source = document.getElementById("pg034_sec001-source")
    || document.getElementById("pg036_sec001-source")
    || document.getElementById("pg040_sec001-source")
    || document.getElementById("pg042_sec001-source");
  if (!source) return;
  var markup = {
    "pg034_n0010": '1. Pronounce/sign the words <span class="source-example-accent">and</span>, and <span class="source-example-accent">end</span>.',
    "pg034_n0011": '2. Add a sound at the beginning of the following words: <span class="source-example-accent">and</span> , <span class="source-example-accent">end</span> /<br> Finger spell additional letters at the beginning of the following words: <span class="source-example-accent">and</span>, <span class="source-example-accent">end</span>. Make as many correct words as possible.',
    "pg034_n0012": 'Examples of the word <span class="source-example-accent">and</span>',
    "pg034_n0013": 'and- <span class="source-example-accent">h</span>and<br> and- <span class="source-example-accent">l</span>and',
    "pg036_n0002": 'Add appropriate letter sounds <span class="source-exercise-accent">s</span>, <span class="source-exercise-accent">b</span>, <span class="source-exercise-accent">c</span>, <span class="source-exercise-accent">d</span> and <span class="source-exercise-accent">f</span> at the beginning of each word to form correct words.',
    "pg040_exercise_4_example": '<strong>Example:</strong> <span class="source-exercise-accent">h</span>ug-<span class="source-exercise-accent">t</span>ug',
    "pg042_n0003": '1. Replace the middle sounds of the words with the letter sound <span class="source-exercise-accent">o</span>. Then, pronounce the new words formed. Or Replace the middle letters of the words with the letter <span class="source-exercise-accent">o</span>. Then, sign the new words formed.',
    "pg042_exercise_5_q2": '2. Replace the vowel sounds of the words with the letter sound <span class="source-exercise-accent">a</span>. Then, pronounce the new words formed. Or replace the vowel letters of the words with the letter <span class="source-exercise-accent">a</span>. Then, sign the new words formed.'
  };
  var restoring = false;
  function restoreBookMarkup() {
    if (restoring) return;
    restoring = true;
    Object.keys(markup).forEach(function (dataId) {
      var node = source.querySelector('[data-id="' + dataId + '"]');
      if (!node || node.querySelector("[data-word-index], .bg-yellow-300")) return;
      if (!node.querySelector(".source-example-accent, .source-exercise-accent")) {
        node.innerHTML = markup[dataId];
      }
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
