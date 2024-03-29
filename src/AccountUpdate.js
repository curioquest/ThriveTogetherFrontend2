import React, { useState, useEffect } from 'react';

const AccountUpdate = () => {
    const [userId, setUserId] = useState('');
    const [accountInfo, setAccountInfo] = useState({});
    const [editedAccountInfo, setEditedAccountInfo] = useState({
        username: '',
        name: '',
        age: '',
        gender: '',
        pronouns: '',
        email: '',
        profile_image: '',
        banner_image: '',
        about_me: '',
        my_story: '',
        preferences: '',
    });

  useEffect(() => {
    if (accountInfo) {
      setEditedAccountInfo({ ...accountInfo });
    }
  }, [accountInfo]);

  async function getAccountInfo() {
    try {
      let url = `${process.env.REACT_APP_API_HOST}/api/accounts/${userId}`;
      let response = await fetch(url, {
        credentials: 'include',
      });
      let data = await response.json();

      if (response.ok) {
        setAccountInfo(data);
      } else {
        console.log('Account info could not be found');
      }
    } catch (error) {
      console.error('Error fetching account info:', error);
    }
  }

  async function updateAccountInfo() {
    try {
      let url = `${process.env.REACT_APP_API_HOST}/api/accounts/${userId}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedAccountInfo),
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Account info updated successfully');
        setAccountInfo(editedAccountInfo);
      } else {
        console.log('Account info could not be updated');
      }
    } catch (error) {
      console.error('Error updating account info:', error);
    }
  }

  const handleAccountInfoChange = (event) => {
    const { name, value } = event.target;
    setEditedAccountInfo({ ...editedAccountInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getAccountInfo();
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    await updateAccountInfo();
  };

  return (
    <div className="content-container bg-text rounded-edges d-flex justify-content-center">
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className="form-label">Enter User ID</label>
            <input
              type="text"
              className='form-control'
              value={userId || ''}
              onChange={(e) => setUserId(e.target.value)} />
          </div>
          <br></br>
          <div>
            <div className="d-flex justify-content-center">
              <input className='btn btn-primary' type='submit' value='Update' />
              </div>
          </div>
          <br></br>
        </form>
        <br></br>
        {accountInfo && (
          <div>
            <h5 className='card-header'>Update Account Information</h5>
            <form onSubmit={handleUpdateSubmit}>
              <br></br>
              <div className='mb-3'>
                <label className='form-label'>Username</label>
                <input
                  type="text"
                  name="username"
                  className='form-control'
                  value={editedAccountInfo.username || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className='form-control'
                  value={editedAccountInfo.name || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Age</label>
                <input
                  type="text"
                  name="age"
                  className='form-control'
                  value={editedAccountInfo.age || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Gender</label>
                <input
                  type="text"
                  name="gender"
                  className='form-control'
                  value={editedAccountInfo.gender || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Pronouns</label>
                <input
                  type="text"
                  name="pronouns"
                  className='form-control'
                  value={editedAccountInfo.pronouns || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  className='form-control'
                  value={editedAccountInfo.email || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Profile Image</label>
                <input
                  type="text"
                  name="profile_image"
                  className='form-control'
                  value={editedAccountInfo.profile_image || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Banner Image</label>
                <input
                  type="text"
                  name="banner_image"
                  className='form-control'
                  value={editedAccountInfo.banner_image || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">About Me</label>
                <input
                  type="text"
                  name="about_me"
                  className='form-control'
                  value={editedAccountInfo.about_me || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">My Story</label>
                <input
                  type="text"
                  name="my_story"
                  className='form-control'
                  value={editedAccountInfo.my_story || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <div className='mb-3'>
                <label className="form-label">Preferences</label>
                <input
                  type="text"
                  name="preferences"
                  className='form-control'
                  value={editedAccountInfo.preferences || ''}
                  onChange={handleAccountInfoChange}
                />
              </div>
              <br />
                  <div>
                     <div className="d-flex justify-content-center">
                      <input className='btn btn-primary' type='submit' value='Update' />
                  </div>
                  </div>
                <br></br>
          </form>

        </div>
      )}
    </div>
    </div>
  );
};

export default AccountUpdate;
