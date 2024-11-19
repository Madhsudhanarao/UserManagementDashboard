import { fetchUsers, addUser, editUser, deleteUser } from './api';

const userList = document.getElementById('user-list');
const formSection = document.getElementById('form-section');
const userForm = document.getElementById('user-form');
const addUserBtn = document.getElementById('add-user-btn');
const cancelBtn = document.getElementById('cancel-btn');
const errorMessage = document.getElementById('error-message');

console.log('App Loaded');

const showError = (message) => {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
};

const hideError = () => {
  errorMessage.style.display = 'none';
};

// Function to refresh the list of users
const refreshUserList = async () => {
  userList.innerHTML = 'Loading...';
  try {
    const users = await fetchUsers();
    if (users.length === 0) {
      userList.innerHTML = 'No users found.';
    } else {
      userList.innerHTML = users
        .map(
          (user) =>
            `<div class="user-card">
            <div>
              <p><strong>ID:</strong> ${user.id}</p>
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Department:</strong> ${user.company.name}</p>
            </div>
            <div>
              <button onclick="editUserHandler(${user.id})">Edit</button>
              <button onclick="deleteUserHandler(${user.id})">Delete</button>
            </div>
          </div>`
        )
        .join('');
    }
  } catch (error) {
    showError('Failed to fetch users. Please try again later.');
    console.error('Error fetching users:', error);
  }
};

window.editUserHandler = async (id) => {
  try {
    const user = await fetchUsers().then((users) =>
      users.find((u) => u.id === id)
    );
    if (!user) {
      showError('User not found.');
      return;
    }
    document.getElementById('first-name').value = user.name.split(' ')[0];
    document.getElementById('last-name').value = user.name.split(' ')[1];
    document.getElementById('email').value = user.email;
    document.getElementById('department').value = user.company.name;
    document.getElementById('user-id').value = user.id;
    formSection.style.display = 'block';
  } catch (error) {
    showError('Failed to load user details for editing.');
    console.error('Error editing user:', error);
  }
};

window.deleteUserHandler = async (id) => {
  try {
    const user = await fetchUsers().then((users) =>
      users.find((u) => u.id === id)
    );
    if (!user) {
      showError('User not found.');
      return;
    }
    await deleteUser(id);
    refreshUserList();
    alert(`${user.name} was deleted successfully.`);
  } catch (error) {
    showError('Failed to delete user. Please try again later.');
    console.error('Error deleting user:', error);
  }
};

userForm.onsubmit = async (event) => {
  event.preventDefault();
  const user = {
    name: `${document.getElementById('first-name').value} ${
      document.getElementById('last-name').value
    }`,
    email: document.getElementById('email').value,
    company: { name: document.getElementById('department').value },
  };

  const userId = document.getElementById('user-id').value;
  try {
    if (userId) {
      await editUser(userId, user);
    } else {
      await addUser(user);
    }
    refreshUserList();
    formSection.style.display = 'none';
  } catch (error) {
    showError('Failed to save user details. Please try again later.');
    console.error('Error submitting form:', error);
  }
};

addUserBtn.addEventListener('click', () => {
  hideError();
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('department').value = '';
  document.getElementById('user-id').value = '';
  formSection.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  formSection.style.display = 'none';
  hideError();
});

refreshUserList();
