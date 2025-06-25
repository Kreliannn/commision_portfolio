export const systemsForSale = [

 {
      id: 1,
      title: "Ai-Powered PDF to Reviewer and Quiz Generator System",
      description: "A web app that use Ai to turn pdf files into Structured Q&A type Reviewer. user can customize the generated output before saving, and take personalized quizzes based on the saved Reviewer. The quiz allows filtering, skipping questions, and allow user to choose between input and multiple-choice modes. After completing a quiz, users get a visual breakdown of their performance including correct, wrong, and skipped answers.",
      tech: ["react", "node js", "postgre", "tailwind", "express js"],
      price: "₱900",
      image: "/system/reviewersystem.png",
      images: [
            "/system_preview/reviewersystem (9).png",
            "/system_preview/reviewersystem (8).png",
            "/system_preview/reviewersystem (7).png",
            "/system_preview/reviewersystem (11).jpg",
            "/system_preview/reviewersystem (6).png",
            "/system_preview/reviewersystem (5).png",
            "/system_preview/reviewersystem (4).png",
            "/system_preview/reviewersystem (3).png",
            "/system_preview/reviewersystem (2).png",
            "/system_preview/reviewersystem (1).png",
      ],

      information : `
The system allows users to generate reviewers easily. It can automatically create questions and answers from uploaded PDF file using Ai. Users can upload multiple PDF files at once, and the system will process them into a well-organized reviewer. Before saving, users can modify the output by editing, adding, or removing questions. Once finalized, the reviewer is automatically saved to the database.

After saving a reviewer, users can take personalized quizzes based on the content. The quiz questions are shuffled each time for variety. Users can filter questions to focus on specific topics or scope. If unsure, users also have the option to pass a question. The system offers flexible answer input, allowing either text-based answers or multiple-choice selections.

To help users track their performance, the system provides a detailed quiz result summary. After each quiz, users can view a visual performance chart (such as a pie chart), along with the total number of correct, wrong, and passed questions. This helps learners easily monitor their progress and focus on areas for improvement.
      `
  },

  {
      id: 2,
      title: "Tenant-Landlord Rental Platform",
      description: "A platform that connects tenants and landlords with map integration for property listings and real-time chat for seamless communication. Landlords can list and manage rentals, while tenants can browse, apply, and chat instantly.",
      tech: ["php", "mysql", "bootstrap"],
      price: "₱900",
      image: "/system/quicktiraa.png",
      images: [
            "/system_preview/quicktira (11).jpg",
            "/system_preview/quicktira (9).jpg",
            "/system_preview/quicktira (10).jpg",
            "/system_preview/quicktira (8).jpg",
            "/system_preview/quicktira (7).jpg",
            "/system_preview/quicktira (6).jpg",
            "/system_preview/quicktira (5).jpg",
            "/system_preview/quicktira (4).jpg",
            "/system_preview/quicktira (3).jpg",
            "/system_preview/quicktira (2).jpg",
            "/system_preview/quicktira (1).jpg",
            "/system_preview/quicktira (12).jpg",
            "/system_preview/quicktira (13).jpg",
            ],
      information : `
Landlord Features:
Landlords can post their properties with images and detailed information to attract potential tenants. They have the ability to set the exact property location on the map and manage all their listings, including editing or deleting posts. Landlords can also accept rent requests from tenants, respond to messages, and update their account information as needed.

Tenant Features:
Tenants can view all available property listings and see them displayed on the map for easier location tracking. They can send private messages to landlords, bookmark and like property posts, and apply to rent a property. Additional features include reporting landlord posts, editing account details, tracking the status of their rental applications, and viewing landlord profiles.

Admin Features:
Admins are responsible for maintaining the platform's integrity. They can ban inappropriate property posts and user accounts, manage reports submitted by users, and verify landlord accounts for authenticity. An admin dashboard is provided to efficiently oversee and manage all platform activities.
      `
    },


    {
      id: 3,
      title: "Online Clothing Store E-commerce System",
      description: "An online clothing store that  has monthly and product sales monitoring, allowing the admin to track the performance of each product and overall shop sales.It also comes with a printable sales report generator for easy sales tracking and record-keeping. The system includes product management features for adding, editing, and deleting products. ",
      tech: ["react", "node js", "mongo db", "tailwind", "express js"],
      price: "₱900",
      image: "/system/clothingsystem.png",
      images: [
            "/system_preview/clothingsystem (1).jpg",
            "/system_preview/clothingsystem (15).jpg",
            "/system_preview/clothingsystem (14).jpg",
            "/system_preview/clothingsystem (13).jpg",
            "/system_preview/clothingsystem (12).jpg",
            "/system_preview/clothingsystem (11).jpg",
            "/system_preview/clothingsystem (10).jpg",
            "/system_preview/clothingsystem (9).jpg",
            "/system_preview/clothingsystem (8).jpg",
            "/system_preview/clothingsystem (7).jpg",
            "/system_preview/clothingsystem (6).jpg",
            "/system_preview/clothingsystem (5).jpg",
            "/system_preview/clothingsystem (4).jpg",
            "/system_preview/clothingsystem (3).jpg",
            "/system_preview/clothingsystem (2).jpg",
            ],

      information : `

Customer Features:

Customers can browse all available products, place orders, and use the add-to-cart feature. They can view the available colors and check the stock for each size of a product. Customers can also track their order status, if the order is Pending, Processing, or To Ship.


Admin Features

The admin can manage products by adding, editing, and deleting items. Admins can also add multiple variations of a product (e.g., the same t-shirt in different colors). They can restock products and see indicators for out-of-stock items.

The system includes a dashboard with charts showing monthly sales and monthly best-selling products. It can also generate printable sales reports for both monthly sales and top-selling items.

Admins can view the full transaction history and are responsible for updating the order status—from Accepting Pending Orders to Processing and then to To Ship.

      `
    },

    {
      id: 4,
      title: "Barangay Documents Request System",
      description: "A  system that allows residents to request barangay documents online without visiting the barangay hall. Residents can track their request status, receive email notifications, and view request history. The barangay admin can manage requests, update statuses, and track transaction history.",
      tech: ["react", "node js", "mongo db", "tailwind", "express js"],
      price: "₱800",
      image: "/system/requestsystem.png",
     images: [
            "/system_preview/requestsystem (12).png",
            "/system_preview/requestsystem (11).png",
            "/system_preview/requestsystem (10).png",
            "/system_preview/requestsystem (9).png",
            "/system_preview/requestsystem (8).png",
            "/system_preview/requestsystem (7).png",
            "/system_preview/requestsystem (6).png",
            "/system_preview/requestsystem (5).png",
            "/system_preview/requestsystem (4).png",
            "/system_preview/requestsystem (3).png",
            "/system_preview/requestsystem (2).png",
      ],

      information : `
Residents can request barangay documents online, such as barangay clearance, business permit, barangay residency, and more. They can choose to pick up the document at the barangay office or have it delivered to their home once it's ready.

There is a notification section where residents can track the status of their requests—whether it's "Pending," "Processing," or "Completed." Every time the status changes, it is shown in the notification section, and an email is automatically sent to the resident's Gmail account with the updated status.

Admins can view and manage all document requests. They are responsible for updating the status of each request (Approve, Reject, Process, Complete). Admins can also see which documents are ready for pickup or delivery, view the full request history, and track the earnings from document requests.
      `
    },


    {
      id: 5,
      title: "Fastfood Ordering Platform",
      description: "A food ordering platform where users can register as business owners or customers. Business owners can manage their stores and products, while customers can browse and order from available businesses. The platform also includes an admin dashboard to oversee transactions and earnings.",
      tech: ["php", "mysql", "bootstrap"],
      price: "₱700",
      image: "/system/fastfoodplatform.png",
      images: ["/system_preview/fastfoodplatform (1).jpg", "/system_preview/fastfoodplatform (2).jpg", "/system_preview/fastfoodplatform (6).jpg", "/system_preview/fastfoodplatform (5).jpg", "/system_preview/fastfoodplatform (4).jpg", "/system_preview/fastfoodplatform (3).jpg"],
      information : `
The platform offers a range of features tailored for business owners, customers, and admins. Business owners can create and manage their business listings by adding, editing, or removing them as needed. They can also customize their business profiles, including updating the name, logo, and availability. Additionally, they have control over their product menus, allowing them to add, update, or delete items. A dedicated dashboard provides insights into their business performance, sales, and other key metrics, while a transaction history section enables them to track all past orders and transactions.


For customers, the platform supports account management, allowing users to edit their profile details and update their profile pictures. They can browse a list of available businesses, view menus, and place orders. Their past purchases are recorded in an order history section for easy tracking.


Admins have access to a centralized dashboard where they can monitor all business activities and user contributions. They also handle revenue management, earning a percentage from every sale made through the platform.
      `
    },


    {
      id: 6,
      title: "Restaurant POS System",
      description: "A POS system for restaurants to streamline order management, track sales, monitor inventory levels, and generate reports. This system allows restaurant owners to efficiently manage their menu, keep track of stock availability, and gain insights into daily and monthly sales performance.",
      tech: ["java", "swing", "mysql"],
      price: "₱500",
      image: "/system/restaurantsystem.png",
      images: ["/system_preview/restaurantsystem (5).png", "/system_preview/restaurantsystem (2).png", "/system_preview/restaurantsystem (3).png", "/system_preview/restaurantsystem (1).png",, "/system_preview/restaurantsystem (4).png" ],
      information : `
 POS system for restaurants is designed to streamline order management, monitor inventory, track sales, and generate insightful reports. It enables restaurant owners to efficiently manage their menu, monitor stock availability, and gain valuable insights into daily and monthly sales performance. With features like menu management, users can easily add, edit, or remove products from the menu. The system also offers real-time stock tracking to help maintain adequate inventory levels and prevent shortages. Additionally, it provides detailed sales tracking with customizable reports and stores a history of receipts and past transactions, ensuring smooth operations and informed decision-making.
      `
    },

    {
      id: 7,
      title: "Quiz Management System",
      description: "This secure quiz-taking system is designed to help teachers manage quizzes effectively while preventing student cheating. It features an anti-cheating mechanism that automatically submits a quiz and flags it if a student switches tabs or leaves the quiz window. Teachers can create quizzes with time limits, set deadlines, view and filter student scores, and track overall performance. Meanwhile, students can view available quizzes, take them within the given time, and review their quiz history to monitor their progress.",
      tech: ["php", "mysql", "bootstrap"],
      price: "₱600",
      image: "/system/profsystem.png",
      images: [
            "/system_preview/profsystem (9).png",
            "/system_preview/profsystem (8).png",
            "/system_preview/profsystem (7).png",
            "/system_preview/profsystem (6).png",
            "/system_preview/profsystem (5).png",
            "/system_preview/profsystem (4).png",
            "/system_preview/profsystem (3).png",
            "/system_preview/profsystem (2).png",
            "/system_preview/profsystem (1).png",
      ],

      information : `
System Overview
This secure quiz-taking system is designed to prevent cheating and enhance overall quiz management. One of its key features is the anti-cheating mechanism: students are not allowed to switch tabs during a quiz. If a student attempts to Alt+Tab or navigate away from the quiz window, the system will automatically submit their quiz and flag it with a cheating status. This status is visible to the teacher for transparency and accountability.

For Teachers
Teachers have full control over quiz creation and management. They can create quizzes with customizable time limits, deadlines, and subject tags. After students complete the quizzes, teachers can view all student scores and track their performance. To make evaluation easier, the system includes filtering options that help teachers sort and analyze student data efficiently.

For Students
Students can access and view all quizzes assigned to them by their teachers. Each quiz comes with a clear time limit and must be completed within the specified window. Once completed, students can review their quiz history, including past scores and performance metrics, allowing them to monitor their progress over time.
      `
    },


    {
      id: 8,
      title: "Pharmacy Sales and Stock Monitoring System",
      description: "A pharmacy management system that helps store owners manage products, suppliers, and sales. It tracks inventory levels, it has indicator when items need restocking, and generates printable sales reports. The system streamlines daily operations by keeping all product, supplier, and sales information in one platform.",
      tech: ["react", "node js", "mongo db", "tailwind", "express js"],
      price: "₱750",
      image: "/system/pharmacysystem.png",
      images: ["/system_preview/pharmacysystem (1).jpg", "/system_preview/pharmacysystem (2).jpg", "/system_preview/pharmacysystem (3).jpg", "/system_preview/pharmacysystem (4).jpg", "/system_preview/pharmacysystem (5).jpg", "/system_preview/pharmacysystem (6).jpg", "/system_preview/pharmacysystem (7).jpg", "/system_preview/pharmacysystem (8).jpg", ],
      information : `
The system is designed to efficiently manage a pharmacy store. It includes product management, allowing the admin to add, edit, or delete medicines and other pharmacy items. The system also has a supplier management feature, where the admin can manage supplier information and track incoming deliveries.

For sales management, the system records all transactions and generates detailed sales reports. It also provides a printable sales report for easy documentation and record-keeping. The system helps track inventory levels and can identify which products are running low, ensuring the admin knows when to restock medicines and other essential items.

With this pharmacy management system, store owners can streamline daily operations, monitor product availability, and keep track of both sales and supplier transactions—all in one platform.
    `
    },




    {
      id: 9,
      title: "POS with Barcode Scanner and Ai Assistant Chatbot ",
      description: "A POS system with a barcode scanner and an AI assistant chatbot that can answer all questions related to your business. It also includes product management and daily sales monitoring.",
      tech: ["python", "pyqt", "mysql"],
      price: "₱800",
      image: "/system/grocerysystem.png",
      images: [
            "/system_preview/grocerysystem (1).jpg",
            "/system_preview/grocerysystem (10).jpg",
            "/system_preview/grocerysystem (9).jpg",
            "/system_preview/grocerysystem (8).jpg",
            "/system_preview/grocerysystem (7).jpg",
            "/system_preview/grocerysystem (6).jpg",
            "/system_preview/grocerysystem (5).jpg",
            "/system_preview/grocerysystem (4).jpg",
            "/system_preview/grocerysystem (3).jpg",
            "/system_preview/grocerysystem (2).jpg",
            "/system_preview/grocerysystem (1).jpg",
      ],

      information : `
The admin has a dashboard to view daily and total sales of the shop. They can manage products by adding, editing, or deleting items, and monitor product stock levels.

The system includes a powerful AI assistant chatbot that can answer all questions related to the system. The admin can ask things like "What are the top-selling products?" or "Which day had the highest sales?" and get instant answers. The chatbot helps the admin understand what’s going on in the business at any time.

There is also a sales report section to monitor daily sales, a notification section that alerts the admin when items are out of stock, and a receipt history for reviewing past transactions.


The cashier can scan product barcodes, just like in a grocery store. After each transaction, a receipt is generated, and the stock is automatically reduced based on the quantity bought. The cashier can also view receipt history.

      `
    },
    




    {
      id: 10,
      title: "Employee Salary Deduction Monitoring System",
      description: "A system that manages employee information, including tax and loans. It automatically calculates the total deductions from each employee’s salary. The system also generates an Excel sheet for the employee's monthly tax and loan records.  ",
      tech: ["react", "node js", "mongo db", "tailwind", "express js"],
      price: "₱700",
      image: "/system/employeesystem.png",
      images: [
            "/system_preview/employeesystem (1).jpg",
            "/system_preview/employeesystem (2).jpg",
            "/system_preview/employeesystem (11).jpg",
            "/system_preview/employeesystem (10).jpg",
            "/system_preview/employeesystem (9).jpg",
            "/system_preview/employeesystem (8).jpg",
            "/system_preview/employeesystem (7).jpg",
            "/system_preview/employeesystem (6).jpg",
            "/system_preview/employeesystem (5).jpg",
            "/system_preview/employeesystem (4).jpg",
            "/system_preview/employeesystem (3).jpg",
      ],

      information : `
A system that can manage employee data, allowing you to add, edit, and delete employees. After adding an employee, you can set their tax and loan details. The system automatically generates an Excel file that contains each employee's tax and loan records. It also calculates the total deductions for each employee, making it easy to monitor their deductions.
      `
    },


    {
      id: 11,
      title: "Book Swap Platform",
      description: "A platform where users can post books they have already read and receive book swap requests from others user. Users can browse available books, send swap requests, and connect with fellow readers. The book owner has full control over which request to accept, making book exchanges simple and convenient.",
      tech: ["php", "mysql", "bootstrap"],
      price: "₱600",
      image: "/system/bookswap.png",
     images: [
            "/system_preview/bookswap (1).png",
            "/system_preview/bookswap (10).png",
            "/system_preview/bookswap (9).png",
            "/system_preview/bookswap (8).png",
            "/system_preview/bookswap (7).png",
            "/system_preview/bookswap (6).png",
            "/system_preview/bookswap (5).png",
            "/system_preview/bookswap (4).png",
            "/system_preview/bookswap (3).png",
            "/system_preview/bookswap (2).png",
      ],

      information : `
The platform provides several features for users to facilitate book swapping. Users can post books they’ve finished reading and are willing to swap. They can also set up a wishlist of books they want to receive. When someone is interested in a swap, users can receive and review the swap requests, then choose which request they want to accept. To help finalize the details, users can chat with one another directly. Additionally, the platform allows users to track the status of each swap request, including whether it is pending, accepted, completed, or rejected.
      `
    }, 


    {
      id: 12,
      title: "POS System with sales and Inventory Monitoring",
      description: "A POS system that can manage orders, track weekly sales, monitor inventory levels, and generate reports. This system allows business owners to efficiently manage their menu, keep track of stock availability, and gain insights into daily and weekly sales performance",
      tech: ["python", "pyqt", "mysql"],
      price: "₱750",
      image: "/system/pastrysystem.png",
      images: [
            "/system_preview/pastrysystem (1).jpg",
            "/system_preview/pastrysystem (9).jpg",
            "/system_preview/pastrysystem (8).jpg",
            "/system_preview/pastrysystem (7).jpg",
            "/system_preview/pastrysystem (6).jpg",
            "/system_preview/pastrysystem (5).jpg",
            "/system_preview/pastrysystem (4).jpg",
            "/system_preview/pastrysystem (3).jpg",
            "/system_preview/pastrysystem (2).jpg",
      ],

      information : `
The admin can manage products by adding, editing, deleting, or viewing them and filter products based on category. The admin has a dashboard to see the shop’s daily and weekly sales performance. The admin can also manage cashiers and view all receipt history. There's a notification section where the system automatically alerts the admin if a product is low on stock or out of stock.

The cashier can handle customer orders, generate receipts, and view transaction history. The cashier can also check if an item is out of stock and filter products based on its category. When a customer places an order, the stock of the item is automatically reduced based on the quantity purchased.

      `
    },



    {
      id: 13,
      title: "Cafe Kiosk Ordering System",
      description: "A self-ordering kiosk system for café stores that allows customers to place orders before proceeding to the cashier. Orders automatically appear on the cashier’s screen, where they can update the order status in real time.",
      tech: ["java", "swing", "mysql",],
      price: "₱500",
      image: "/system/cafesystem.png",
      images: ["/system_preview/cafesystem (1).png", "/system_preview/cafesystem (2).png", "/system_preview/cafesystem (3).png", "/system_preview/cafesystem (4).png",, "/system_preview/cafesystem (5).png", "/system_preview/cafesystem (6).png" ],
      information : `
The self-ordering kiosk system for café stores streamlines the ordering process by allowing customers to browse the menu and place orders directly at a kiosk before proceeding to payment. Once an order is placed, it instantly appears on the cashier’s dashboard, where the staff can manage and update the order status in real time—marking them as Paid, Canceled, To Pick Up, or Completed. The system also features automatic ingredient tracking and stock control, preventing orders if necessary ingredients are unavailable. When an order is placed, the system deducts the corresponding ingredients from inventory automatically (e.g., ordering Black Coffee reduces quantities of coffee beans and sugar). Additionally, the admin has control over product management, enabling updates to product names and prices, and can easily replenish ingredient stock through the integrated restock system.
      `
    },


    {
      id: 14,
      title: "Canteen Reservasion System",
      description: "This food reservation system allows students to reserve meals in advance while enabling canteen staff to efficiently manage food items, stock, and reservation orders. Canteen staff can update the menu, monitor stock levels, accept or reject orders, and track pickup schedules. Students can create accounts, place orders, and track their order status, making the process more convenient and organized for both sides.",
      tech: ["php", "mysql", "bootstrap"],
      price: "₱600",
      image: "/system/canteensystem.png",
      images: ["/system_preview/canteensystem (1).png", "/system_preview/canteensystem (2).png", "/system_preview/canteensystem (3).png", "/system_preview/canteensystem (4).png",, "/system_preview/canteensystem (5).png", "/system_preview/canteensystem (6).png" ],
      information : `
This food reservation system is designed to streamline the ordering process for both students and canteen staff. It allows students to conveniently reserve their meals ahead of time, reducing wait times and ensuring availability. At the same time, it helps the canteen manage operations more efficiently by organizing product listings, monitoring stock, and handling orders systematically.

For canteen staff, the system offers tools to add, edit, or delete food items, ensuring the menu is always up to date. They can also manage stock availability to prevent over-ordering and view all incoming reservations. Each reservation can be accepted or rejected, and staff can track specific pickup details such as date and time to ensure smooth order fulfillment.

Students, on the other hand, can register an account and browse available food items. They can place reservation orders in advance and keep track of their order status through clearly defined stages—Pending, Accepted, or Completed. This gives them greater control and visibility over their orders, making the food reservation experience more convenient and reliable.
      `
    },

   
    


   {
      id: 15,
      title: "Employee Attendance Monitoring System",
      description: "The system manages and monitors employee attendance, including time in, time out, and whether they are on time or late. It also shows daily records of who is present and absent.",
      tech: ["python", "pyqt", "mysql"],
      price: "₱500",
      image: "/system/attendancesystem.png",
      images: ["/system_preview/attendancesystem (1).jpg", "/system_preview/attendancesystem (2).jpg", "/system_preview/attendancesystem (3).jpg", "/system_preview/attendancesystem (4).jpg",, "/system_preview/attendancesystem (5).jpg", "/system_preview/attendancesystem (6).jpg"  ],
      information : `
Employees can time in and time out using the system. If the time in is later than their scheduled time, it will be marked as "Late." If the time out is earlier than the scheduled time, it will be marked as "Early Out." Otherwise, the status will be "In Time."

The admin can view daily records of present and absent employees. The admin can also manage employees by adding or editing their profiles, and setting their work schedules. Additionally, the admin can see the status of each employee’s time in and time out—whether it's "Late," "Early Out," or "In Time."

      `
  },
    
  
  ]




  const a = [
   
    
  ]