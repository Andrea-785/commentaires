// Pour que la page html soit chargé avant l'execution du code javascript.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const messageInput = document.getElementById('message');
  const errorMessage = document.getElementById('error-message');
  const commentList = document.getElementById('comment-list');

  //Pour que la page ne charge pas.
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
//Pour éviter les espaces iutiles dans les réponses
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const message = messageInput.value.trim();

    // Vérification des champs vides
    if (!firstName || !lastName || !message) {
      errorMessage.style.display = 'block';
      return;
    } else {
      errorMessage.style.display = 'none';
    }

    // Création du nouveau commentaire
    const commentDiv = document.createElement('div');
    commentDiv.className = 'flex space-x-4 text-sm text-gray-500';
    commentDiv.innerHTML = `
      <div class="flex-1 py-10 border-t border-gray-200">
        <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${message}</p>
        </div>
      </div>
    `;

    // Ajout de commentaire à la liste
    commentList.appendChild(commentDiv);

    // Réinitialisation des champs du formulaire
    form.reset();
  });
});

