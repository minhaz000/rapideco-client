# X-store (Multi-Client E-Commerce Platform)
![Alt text](https://github.com/minhaz000/x-store-client/blob/45fc7d3d2d358bf29bba60a633d06c31ef076be8/1774262507291.png)
A fully-featured e-commerce platform designed to host multiple client sites on a single server, with secure payment integration and subscription management.

---

## Key Features
- **Multi-client architecture:** One server can host multiple client sites, each with its own MongoDB database, ensuring data separation and privacy.  
- **Custom payment methods:** Integrated bKash, Rocket, and Nagad for seamless transactions.  
- **Subscription management:** Super admin can activate/deactivate client sites and manage subscription plans (monthly or per usage).  
- **Server cost optimization:** Single backend serves multiple clients, reducing hosting costs while maintaining performance.  
- **Security & control:** Protects server code while allowing admins to manage client operations safely.  
- **SEO-friendly:** Built with Next.js for optimized search engine indexing and fast page rendering.  

---

## Challenges Solved
- Managing multiple client databases without mixing data in REST api 
- Securely controlling admin privileges for different clients  
- Optimizing a single server for multiple production sites without performance issues  

---

## Technologies Used
Next.js, Node.js, MongoDB, Tailwind CSS, VPS hosting, Custom payment gateway integration (bKash, Rocket, Nagad)
