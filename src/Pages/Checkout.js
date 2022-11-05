import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id } = service;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Order placed successfully')
          form.reset();
        }
      })
      .then((error) => console.error(error));
  };

  return (
    <div className="bg-[#F3F3F3] rounded-[10px] my-[120px] p-4 md:p-24">
      <h2>CheckOut</h2>
      <p>Title {title}</p>
      <h4>Price: {price}</h4>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            required
            className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            readOnly
            className="input  input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
          />
        </div>
        <textarea
          name="message"
          required
          className="textarea my-6 h-[100px] md:h-[250px] textarea-primary w-full"
          placeholder="Your Message"
        ></textarea>
        {/* <input
          type="submit"
          class="border border-[#FF3811] bg-[#FF3811] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:duration-1650"
        >
          Order Confirm
        </input> */}
        <input
          type="submit"
          value="Order Confirm"
          class="border text-center cursor-pointer border-[#FF3811] bg-[#FF3811] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:duration-1650"
        />
      </form>
    </div>
  );
};

export default Checkout;
