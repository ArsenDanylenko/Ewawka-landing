function doctors() {
  const lists = document.querySelectorAll(".footer__list");
  if (lists.length > 0) {
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      list.classList.toggle('_active');
    }
  }
}