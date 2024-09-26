window.fbAsyncInit = function() {
    FB.init({
      appId      : '1129972825132947', // Replace with your Facebook App ID
      cookie     : true,  // Enable cookies to allow the server to access the session
      xfbml      : true,  // Parse social plugins on this webpage
      version    : 'v20.0' // Use the latest version of Facebook API
    });
  
    FB.AppEvents.logPageView();   
  };
  

  document.getElementById('facebook-login').addEventListener('click', function() {
    FB.login(function(response) {
      if (response.authResponse) {
        // User is logged in
        FB.api('/me', {fields: 'name,email'}, function(response) {
          console.log('Good to see you, ' + response.name + '.');
          // Redirect to home page
          window.location.href = 'home.html';
        });
      } else {
        // User cancelled login or did not fully authorize.
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email'});
  });
  