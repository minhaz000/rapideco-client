import ICheckout from "@/interface/checkout";
const genarateInvoiceTemplate = async (order: ICheckout, logo?: any) => {
  return `
  <!DOCTYPE html>

<section class="total">
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <title>Product Invoice</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        section.wraper {
          display: flex;
          justify-content: space-between;
        }
        body {
          font-family: "Open Sans", sans-serif;
          position: relative;
          width: 21cm;
          margin: 0 auto;
          color: #001028;
          background: #ffffff;
          font-family: Arial, sans-serif;
          padding:30px 40px
        }

        header {
          text-align: center;
          margin-bottom: 20px;
        }
        header h1 {
          margin-top: 20px;
          padding: 10px 0;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          text-transform: uppercase;
        }

        header img {
          max-width: 100px;
          height: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        .total {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <header>
        <img src=${logo} alt="Your Logo" />
        <h1>Invoice</h1>
      </header>

      <section class="wraper">
        <div>
          <h2 style="font-size: 17px; margin-bottom: 8px">Order Details</h2>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 90px;
              "
              >Order ID:</span
            >
            <p style="font-size: 12px">657d81f78c44011416c1aeb6</p>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 90px;
              "
              >Date:</span
            >
            <p style="font-size: 12px">2023-12-16 16:54:47</p>
          </div>
          <div style="display: flex; gap: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 90px;
              "
              >Delivery Zone:</span
            >
            <p style="font-size: 12px">get new</p>
          </div>
        </div>
        <div>
          <h2 style="font-size: 17px; margin-bottom: 8px">
            Customer Information
          </h2>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 50px;
              "
              >Name:</span
            >
            <p style="font-size: 12px">${order.user_info.name}</p>
          </div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 50px;
              "
              >Phone:</span
            >
            <p style="font-size: 12px">${order.user_info.phone}</p>
          </div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 12px;
                display: block;
                width: 50px;
              "
              >Address:</span
            >
            <p style="font-size: 12px">${order.user_info.address}</p>
          </div>
        </div>
      </section>
      <section style="margin-top: 50px ; margin-bottom:40px">
        <h3 style="font-size: 17px; margin-bottom: 8px">Order Items</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Color</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
           ${order.ordered_items.map((item: any) => {
             return `<tr>
            <td>${item.title}</td>
            <td>${item.discount_price ? item.discount_price : item.regular_price}</td>
            <td>${item.quantity}</td>
            <td>${item?.variants?.size ? item?.variants?.size : ""}</td>
            <td>${
              item?.variants?.color
                ? `<span style={background:${item?.variants?.color}; height:30px ; width:30px ; display:block; border-radious:100px }> </span>`
                : ""
            }</td>
            <td>${item.discount_price ? item.discount_price * item.quantity : item.regular_price * item.quantity}</td>
          </tr>`;
           })}
            <!-- Add more rows for additional items if needed -->
          </tbody>
        </table>
      </section>
      <section style="display: flex; justify-content: space-between">
        <div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 14px;
                display: block;
                width: 117px;
              "
              >Payment Method:</span
            >
            <p style="font-size: 14px">${order.payment_info.method_name}</p>
          </div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 14px;
                display: block;
                width: 117px;
              "
              >Transaction ID:</span
            >
            <p style="font-size: 14px">${order.payment_info.trx_id}</p>
          </div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 14px;
                display: block;
                width: 117px;
              "
              >Status:</span
            >
            <p style="font-size: 14px">${order.payment_info.status}</p>
          </div>
        </div>
        <div>
          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 14px;
                display: block;
                width: 117px;
              "
              >Shipping:</span
            >
            <p style="font-size: 14px">${order.user_info.delivery?.cost}</p>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 6px">
            <span
              style="
                font-weight: 600;
                font-size: 14px;
                display: block;
                width: 117px;
              "
              >Total Amount</span
            >
            <p style="font-size: 14px">${order.payment_info.amount + order.user_info.delivery.cost}</p>
          </div>
        </div>
      </section>

      <footer></footer>
    </body>
  </html>
</section>
  `;
};
export default genarateInvoiceTemplate;
