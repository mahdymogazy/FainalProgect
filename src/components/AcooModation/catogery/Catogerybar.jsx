

function Catogerybar() {
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#category1"><i class="icon1"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#category2"><i class="icon2"></i></a>
        </li>
        <li class="nav-item">
          <

    {/* //////////////////////////////// */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" data-id="category1"><i class="icon1"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-id="category2"><i class="icon2"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-id="category3"><i class="icon3"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="cards">
  <div class="card" id="category1">
    ...
  </div>
  <div class="card" id="category2">
    ...
  </div>
  <div class="card" id="category3">
    ...
  </div>
</div>
{/* //////////////////////////////////////////////////////////////////////////// */}
const categoryBar = document.querySelector('.navbar-nav');
const cards = document.querySelector('.cards');

categoryBar.addEventListener('click', (event) => {
  const categoryId = event.target.dataset.id;
  const card = cards.querySelector(`#${categoryId}`);

  // Hide all cards
  cards.querySelectorAll('.card').forEach((card) => {
    card.style.display = 'none';
  });

  // Show the selected card
  card.style.display = 'block';
});
{/* ////////////////////////////////////////////// */}

    </>
  )
}

export default Catogerybar