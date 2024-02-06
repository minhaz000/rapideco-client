function generateOrderNotificationEmail(order: any) {
  function formatLocalDate(dateString: any) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleString(undefined, options as any);
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order Notification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f4;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Order Notification</h2>

        <h3>User Information</h3>
        <table>
          <tr>
            <th>Name</th>
            <td>${order.user_info.name}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>${order.user_info.phone}</td>
          </tr>
          ${
            order.user_info.email
              ? `
          <tr>
            <th>Email</th>
            <td>${order.user_info.email}</td>
          </tr>
          `
              : ``
          }
          <tr>
            <th>Address</th>
            <td>${order.user_info.address}</td>
          </tr>
        </table>

        <h3>Ordered Items</h3>
        <table>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          ${order.ordered_items
            .map(
              (item: any) => `
            <tr>
              <td>${item.title}</td>
              <td>${item.quantity}</td>
              <td>${item.discount_price * item.quantity}</td>
            </tr>
          `
            )
            .join("")}
        </table>

        <h3>Payment Information</h3>
        <table>
          <tr>
            <th>Amount</th>
            <td>${order.payment_info.amount}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>${order.payment_info.method_name}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>${order.payment_info.status}</td>
          </tr>
        </table>

        <h3>Order Status</h3>
        <p>${order.status}</p>

        <p>Order placed on: ${formatLocalDate(order.createdAt)}</p>

        <p>Please review this order at your earliest convenience. If you have any questions or need further clarification, please feel free to reach out.</p>

        <p>Thank you for your cooperation.</p>

        <p>Best regards,<br>
        Xstore  Support Team<br>
        </p>
        <address>
          Green Road - Dhaka, Bangladesh (Remote Desk)<br>
          <a href="www.xstore.com.bd">xstore.com.bd</a><br>
          <a href="mailto:support@xstore.com.bd">support@xstore.com.bd</a>
        </address> 
      </div>
    </body>
    </html>
  `;
}

export default generateOrderNotificationEmail;
