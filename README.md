Welcome to Micheal's Bistro Gourmet Kitchen! This website is designed to showcase a variety of food items and provide social media integration for a chef's brand. The site includes a homepage with food items, an about page, a contact page, and individual pages for Instagram, Facebook, and YouTube links.

The main feature of the website is its click-tracking mechanism for the social media links. Every time a user clicks on one of the social media pages (Instagram, Facebook, YouTube), the backend records this action and updates the count for each respective platform. The admin panel allows the chef or team to monitor these counts in real-time.


Features:

Homepage: Displays a list of food items with pictures.

About Us: A page providing information about the chef and the business.

Contact Us: A page for users to reach out.

Social Media Pages: Directs users to Instagram, Facebook, and YouTube pages.

Admin Panel: A backend page for tracking how many times each social media link has been clicked.

Real-Time Click Tracking: The backend counts the clicks for Instagram, Facebook, and YouTube and displays them in the admin panel.


Installation:

To run this website locally, you need to have the following software installed:
Prerequisites
    Node.js: You need Node.js installed to run the backend server.
        
    Install Node.js: https://nodejs.org/
npm (Node Package Manager): npm is included with Node.js and will be used to install dependencies.


Setup Instructions:

   Clone the Repository:
        If you're starting from a repository, clone it to your local machine using:
    
    git clone <repository-url>
If you don't have the project yet, you can create a new directory and set up the files manually.


Navigate to the Project Directory:

In the terminal, navigate to the root of your project directory:
    
    cd your-project-directory


Install Dependencies:
        
Run the following command to install all required dependencies:
 
    npm install

Run the Server:
    After installing the dependencies, run the following command to start the backend server:
        
    npm start
The application should now be accessible at http://localhost:3000.


Customize the Website:
    You can customize the content of the pages such as the index.html, about.html, contact.html, and the social media pages (Instagram, Facebook, YouTube).
    Place your images (like the logo and food pictures) in the /public/assets/images/ directory.
    Modify the text, layout, or any elements as needed in the HTML files.
    Ensure the social media links in instagram.html, facebook.html, and youtube.html are linked to the correct URLs.


Usage:

Once the server is running, visit http://localhost:3000 in your web browser to view the website. The homepage will display a list of food items, and clicking on any of the social media links (Instagram, Facebook, YouTube) will redirect you back to the homepage after a few seconds while recording the click.


The admin panel is available at http://localhost:3000/admin/admin.html. Here, you can monitor the real-time click counts for each social media platform (Instagram, Facebook, YouTube).



Admin Panel

The Admin Panel allows you to view the number of clicks for each social media link. The click counts are stored in the backend and updated every time a user clicks a social media link on the website.
    The Instagram click count will be updated when the Instagram page is clicked.
    The Facebook click count will be updated when the Facebook page is clicked.
    The YouTube click count will be updated when the YouTube page is clicked.

This data is fetched from the backend and displayed dynamically in the admin panel.
Technologies Used

Frontend:
        HTML5
        CSS3
        JavaScript
    Backend:
        Node.js
        Express.js
    Development Environment:
        npm (Node.js package manager)

License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to expand or modify this README to suit the needs of your project. This structure and description will help users get started with the website, understand its functionality, and know how to run and customize the project.
