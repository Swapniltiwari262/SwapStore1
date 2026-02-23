import { showToast } from "./showToast";

const PROFILE_API_URL = '/api/auth/profile';

const countryCodes = [
  { "country": "India", "calling_code": "+91" },
  { "country": "Afghanistan", "calling_code": "+93" },
  { "country": "Albania", "calling_code": "+355" },
  { "country": "Algeria", "calling_code": "+213" },
  { "country": "American Samoa", "calling_code": "+1-684" },
  { "country": "Andorra", "calling_code": "+376" },
  { "country": "Angola", "calling_code": "+244" },
  { "country": "Anguilla", "calling_code": "+1-264" },
  { "country": "Antigua and Barbuda", "calling_code": "+1-268" },
  { "country": "Argentina", "calling_code": "+54" },
  { "country": "Armenia", "calling_code": "+374" },
  { "country": "Aruba", "calling_code": "+297" },
  { "country": "Australia", "calling_code": "+61" },
  { "country": "Austria", "calling_code": "+43" },
  { "country": "Azerbaijan", "calling_code": "+994" },
  { "country": "Bahamas", "calling_code": "+1-242" },
  { "country": "Bahrain", "calling_code": "+973" },
  { "country": "Bangladesh", "calling_code": "+880" },
  { "country": "Barbados", "calling_code": "+1-246" },
  { "country": "Belarus", "calling_code": "+375" },
  { "country": "Belgium", "calling_code": "+32" },
  { "country": "Belize", "calling_code": "+501" },
  { "country": "Benin", "calling_code": "+229" },
  { "country": "Bermuda", "calling_code": "+1-441" },
  { "country": "Bhutan", "calling_code": "+975" },
  { "country": "Bolivia", "calling_code": "+591" },
  { "country": "Bosnia and Herzegovina", "calling_code": "+387" },
  { "country": "Botswana", "calling_code": "+267" },
  { "country": "Brazil", "calling_code": "+55" },
  { "country": "British Virgin Islands", "calling_code": "+1-284" },
  { "country": "Brunei", "calling_code": "+673" },
  { "country": "Bulgaria", "calling_code": "+359" },
  { "country": "Burkina Faso", "calling_code": "+226" },
  { "country": "Burundi", "calling_code": "+257" },
  { "country": "Cambodia", "calling_code": "+855" },
  { "country": "Cameroon", "calling_code": "+237" },
  { "country": "Canada", "calling_code": "+1" },
  { "country": "Cape Verde", "calling_code": "+238" },
  { "country": "Cayman Islands", "calling_code": "+1-345" },
  { "country": "Central African Republic", "calling_code": "+236" },
  { "country": "Chad", "calling_code": "+235" },
  { "country": "Chile", "calling_code": "+56" },
  { "country": "China", "calling_code": "+86" },
  { "country": "Colombia", "calling_code": "+57" },
  { "country": "Comoros", "calling_code": "+269" },
  { "country": "Congo", "calling_code": "+242" },
  { "country": "Cook Islands", "calling_code": "+682" },
  { "country": "Costa Rica", "calling_code": "+506" },
  { "country": "Croatia", "calling_code": "+385" },
  { "country": "Cuba", "calling_code": "+53" },
  { "country": "Cyprus", "calling_code": "+357" },
  { "country": "Czech Republic", "calling_code": "+420" },
  { "country": "Denmark", "calling_code": "+45" },
  { "country": "Djibouti", "calling_code": "+253" },
  { "country": "Dominica", "calling_code": "+1-767" },
  { "country": "Dominican Republic", "calling_code": "+1-809" },
  { "country": "Ecuador", "calling_code": "+593" },
  { "country": "Egypt", "calling_code": "+20" },
  { "country": "El Salvador", "calling_code": "+503" },
  { "country": "Equatorial Guinea", "calling_code": "+240" },
  { "country": "Eritrea", "calling_code": "+291" },
  { "country": "Estonia", "calling_code": "+372" },
  { "country": "Ethiopia", "calling_code": "+251" },
  { "country": "Fiji", "calling_code": "+679" },
  { "country": "Finland", "calling_code": "+358" },
  { "country": "France", "calling_code": "+33" },
  { "country": "Gabon", "calling_code": "+241" },
  { "country": "Gambia", "calling_code": "+220" },
  { "country": "Georgia", "calling_code": "+995" },
  { "country": "Germany", "calling_code": "+49" },
  { "country": "Ghana", "calling_code": "+233" },
  { "country": "Greece", "calling_code": "+30" },
  { "country": "Greenland", "calling_code": "+299" },
  { "country": "Grenada", "calling_code": "+1-473" },
  { "country": "Guatemala", "calling_code": "+502" },
  { "country": "Guinea", "calling_code": "+224" },
  { "country": "Guyana", "calling_code": "+592" },
  { "country": "Haiti", "calling_code": "+509" },
  { "country": "Honduras", "calling_code": "+504" },
  { "country": "Hong Kong", "calling_code": "+852" },
  { "country": "Hungary", "calling_code": "+36" },
  { "country": "Iceland", "calling_code": "+354" },
  { "country": "Indonesia", "calling_code": "+62" },
  { "country": "Iran", "calling_code": "+98" },
  { "country": "Iraq", "calling_code": "+964" },
  { "country": "Ireland", "calling_code": "+353" },
  { "country": "Israel", "calling_code": "+972" },
  { "country": "Italy", "calling_code": "+39" },
  { "country": "Jamaica", "calling_code": "+1-876" },
  { "country": "Japan", "calling_code": "+81" },
  { "country": "Jordan", "calling_code": "+962" },
  { "country": "Kazakhstan", "calling_code": "+7" },
  { "country": "Kenya", "calling_code": "+254" },
  { "country": "Kuwait", "calling_code": "+965" },
  { "country": "Kyrgyzstan", "calling_code": "+996" },
  { "country": "Laos", "calling_code": "+856" },
  { "country": "Latvia", "calling_code": "+371" },
  { "country": "Lebanon", "calling_code": "+961" },
  { "country": "Lesotho", "calling_code": "+266" },
  { "country": "Liberia", "calling_code": "+231" },
  { "country": "Libya", "calling_code": "+218" },
  { "country": "Liechtenstein", "calling_code": "+423" },
  { "country": "Lithuania", "calling_code": "+370" },
  { "country": "Luxembourg", "calling_code": "+352" },
  { "country": "Macau", "calling_code": "+853" },
  { "country": "Macedonia", "calling_code": "+389" },
  { "country": "Madagascar", "calling_code": "+261" },
  { "country": "Malawi", "calling_code": "+265" },
  { "country": "Malaysia", "calling_code": "+60" },
  { "country": "Maldives", "calling_code": "+960" },
  { "country": "Mali", "calling_code": "+223" },
  { "country": "Malta", "calling_code": "+356" },
  { "country": "Mexico", "calling_code": "+52" },
  { "country": "Moldova", "calling_code": "+373" },
  { "country": "Monaco", "calling_code": "+377" },
  { "country": "Mongolia", "calling_code": "+976" },
  { "country": "Montenegro", "calling_code": "+382" },
  { "country": "Morocco", "calling_code": "+212" },
  { "country": "Mozambique", "calling_code": "+258" },
  { "country": "Myanmar", "calling_code": "+95" },
  { "country": "Namibia", "calling_code": "+264" },
  { "country": "Nepal", "calling_code": "+977" },
  { "country": "Netherlands", "calling_code": "+31" },
  { "country": "New Zealand", "calling_code": "+64" },
  { "country": "Nicaragua", "calling_code": "+505" },
  { "country": "Niger", "calling_code": "+227" },
  { "country": "Nigeria", "calling_code": "+234" },
  { "country": "North Korea", "calling_code": "+850" },
  { "country": "Norway", "calling_code": "+47" },
  { "country": "Oman", "calling_code": "+968" },
  { "country": "Pakistan", "calling_code": "+92" },
  { "country": "Panama", "calling_code": "+507" },
  { "country": "Paraguay", "calling_code": "+595" },
  { "country": "Peru", "calling_code": "+51" },
  { "country": "Philippines", "calling_code": "+63" },
  { "country": "Poland", "calling_code": "+48" },
  { "country": "Portugal", "calling_code": "+351" },
  { "country": "Puerto Rico", "calling_code": "+1-787" },
  { "country": "Qatar", "calling_code": "+974" },
  { "country": "Romania", "calling_code": "+40" },
  { "country": "Russia", "calling_code": "+7" },
  { "country": "Rwanda", "calling_code": "+250" },
  { "country": "Saudi Arabia", "calling_code": "+966" },
  { "country": "Senegal", "calling_code": "+221" },
  { "country": "Serbia", "calling_code": "+381" },
  { "country": "Seychelles", "calling_code": "+248" },
  { "country": "Sierra Leone", "calling_code": "+232" },
  { "country": "Singapore", "calling_code": "+65" },
  { "country": "Slovakia", "calling_code": "+421" },
  { "country": "Slovenia", "calling_code": "+386" },
  { "country": "Somalia", "calling_code": "+252" },
  { "country": "South Africa", "calling_code": "+27" },
  { "country": "South Korea", "calling_code": "+82" },
  { "country": "Spain", "calling_code": "+34" },
  { "country": "Sri Lanka", "calling_code": "+94" },
  { "country": "Sudan", "calling_code": "+249" },
  { "country": "Sweden", "calling_code": "+46" },
  { "country": "Switzerland", "calling_code": "+41" },
  { "country": "Syria", "calling_code": "+963" },
  { "country": "Taiwan", "calling_code": "+886" },
  { "country": "Tajikistan", "calling_code": "+992" },
  { "country": "Tanzania", "calling_code": "+255" },
  { "country": "Thailand", "calling_code": "+66" },
  { "country": "Tunisia", "calling_code": "+216" },
  { "country": "Turkey", "calling_code": "+90" },
  { "country": "Uganda", "calling_code": "+256" },
  { "country": "Ukraine", "calling_code": "+380" },
  { "country": "United Arab Emirates", "calling_code": "+971" },
  { "country": "United Kingdom", "calling_code": "+44" },
  { "country": "United States", "calling_code": "+1" },
  { "country": "Uruguay", "calling_code": "+598" },
  { "country": "Uzbekistan", "calling_code": "+998" },
  { "country": "Vatican City", "calling_code": "+379" },
  { "country": "Venezuela", "calling_code": "+58" },
  { "country": "Vietnam", "calling_code": "+84" },
  { "country": "Yemen", "calling_code": "+967" },
  { "country": "Zambia", "calling_code": "+260" },
  { "country": "Zimbabwe", "calling_code": "+263" }
];

document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    showToast('Please login to view your profile.', 'error');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return;
  }

  try {
    const response = await fetch(PROFILE_API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        throw new Error("Server returned an invalid response.");
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server Error Response:', errorData);
      if (response.status === 401) {
        showToast('Session expired. Please login again.', 'error');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
        return;
      }
      throw new Error(errorData.message || 'Failed to fetch profile data');
    }

    const userData = await response.json();
    displayProfile(userData);

    // Initialize Modal and Form with user data
    setupEditModal(userData);

    // Add Logout Button listener
    document.getElementById('profileLogoutBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      showToast('Logged out successfully!');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    });
  } catch (error) {
    console.error('Detailed Profile Error:', error);
    showToast('Profile Error: ' + error.message, 'error');
  }
});

function setupEditModal(user) {
  const modal = document.getElementById('editProfileModal');
  const editBtn = document.getElementById('editProfileBtn');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('editProfileForm');
  const picInput = document.getElementById('editPicFile');
  const picPreview = document.getElementById('editPicPreview');
  const countryCodeSelect = document.getElementById('editCountryCode');
  let base64Image = user.profilePic || '';

  const populateCountryCodes = () => {
    countryCodeSelect.innerHTML = '';
    // Sort countryCodes alphabetically by country name
    const sortedCodes = [...countryCodes].sort((a, b) => a.country.localeCompare(b.country));
    
    sortedCodes.forEach(item => {
      const option = document.createElement('option');
      option.value = item.calling_code;
      option.textContent = `${item.country} (${item.calling_code})`;
      countryCodeSelect.appendChild(option);
    });

    // Set India as default (+91)
    countryCodeSelect.value = "+91";
  };

  editBtn.onclick = () => {
    modal.style.display = 'flex';
    populateCountryCodes();

    // Pre-fill form
    document.getElementById('editName').value = user.name || '';
    
    // Split phone number into country code and number
    let phoneNumber = user.phone || '';
    if (phoneNumber.startsWith('+')) {
      // Find the longest matching country code
      const matchingCode = countryCodes
        .map(c => c.calling_code)
        .filter(code => phoneNumber.startsWith(code))
        .sort((a, b) => b.length - a.length)[0];

      if (matchingCode) {
        countryCodeSelect.value = matchingCode;
        phoneNumber = phoneNumber.slice(matchingCode.length).trim();
      }
    } else {
        // Default to India if no country code found
        countryCodeSelect.value = "+91";
    }
    document.getElementById('editPhone').value = phoneNumber;

    picPreview.src = user.profilePic || '/images/favicon-32x32.png';
    base64Image = user.profilePic || '';
    
    if (user.address) {
      document.getElementById('editStreet').value = user.address.street || '';
      document.getElementById('editCity').value = user.address.city || '';
      document.getElementById('editState').value = user.address.state || '';
      document.getElementById('editZip').value = user.address.zip || '';
      document.getElementById('editCountry').value = user.address.country || '';
    }
  };

  // Image handling
  picInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 200 * 1024) {
        showToast('Image size should be less than 200 KB', 'error');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        base64Image = reader.result;
        picPreview.src = base64Image;
      };
      reader.readAsDataURL(file);
    }
  };

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    const countryCode = document.getElementById('editCountryCode').value.trim();
    const phoneNumber = document.getElementById('editPhone').value.trim();
    const combinedPhone = countryCode ? `${countryCode} ${phoneNumber}` : phoneNumber;

    const updatedData = {
      name: document.getElementById('editName').value,
      phone: combinedPhone,
      profilePic: base64Image,
      address: {
        street: document.getElementById('editStreet').value,
        city: document.getElementById('editCity').value,
        state: document.getElementById('editState').value,
        zip: document.getElementById('editZip').value,
        country: document.getElementById('editCountry').value,
      }
    };

    try {
      const response = await fetch(PROFILE_API_URL, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const newUser = await response.json();
      showToast('Profile updated successfully!');
      modal.style.display = 'none';
      
      // Refresh the page data
      displayProfile(newUser);
      // Update the local storage user object too
      localStorage.setItem('user', JSON.stringify({
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }));
    } catch (err) {
      showToast('Update failed: ' + err.message, 'error');
    }
  };
}

function displayProfile(user) {
  // Update header
  document.getElementById('userNameHeader').textContent = user.name;
  document.getElementById('userEmailHeader').textContent = user.email;
  if (user.profilePic) {
      document.getElementById('userPic').src = user.profilePic;
  }

  // Update details
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profilePhone').textContent = user.phone || 'Not provided';
  document.getElementById('profileRole').textContent = user.role.toUpperCase();

  // Update address
  if (user.address) {
    document.getElementById('profileStreet').textContent = user.address.street || '--';
    document.getElementById('profileCity').textContent = user.address.city || '--';
    document.getElementById('profileState').textContent = user.address.state || '--';
    document.getElementById('profileZip').textContent = user.address.zip || '--';
    document.getElementById('profileCountry').textContent = user.address.country || '--';
  }
}
