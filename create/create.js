import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);
    // use createBunny to create a bunny with this name and family id
    const name = data.get('name');
    const family_id = data.get('family_id');

    await createBunny({
        name: name,
        family_id: family_id
    });
    form.reset();

    window.location.href = '../families';
});

window.addEventListener('load', async() => {
    // let's dynamically fill in the families dropdown from supabase
    const dropdown = document.querySelector('select');

    const families = await getFamilies();
    // grab the select HTML element from the DOM
    for (let family of families) {
        const optionEl = document.createElement('option');

        optionEl.value = family.id;

        optionEl.textContent = family.name;

        dropdown.append(optionEl);
    }
    // go get the families from supabase

    // for each family

    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
