"use client";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bkash from "../../../assets/bKash.png";
import Nagad from "../../../assets/Nagad.png";
import Rocket from "../../../assets/Rocket.png";
const Checkout = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-6">
      <h2 className="text-center text-3xl font-semibold mt-10">
        Checkout Page
      </h2>
      <div className="lg:flex gap-6 mt-14">
        <div className="basis-7/12 shadow-xl border rounded-md py-3 px-5">
          <h3 className="text-center text-lg pt-3 pb-5">
            অর্ডার করতে,অনুগ্রহ করে আপনার সম্পূর্ণ নাম, মোবাইল নম্বর, সম্পূর্ণ
            ঠিকানা লিখুন এবং অর্ডার কনফার্ম করুন ক্লিক করুন
          </h3>
          <form>
            <div>
              <label>আপনার নাম</label> <br />
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>আপনার ঠিকানা</label> <br />
              <input
                type="text"
                placeholder="আপনার ঠিকানা লিখুন"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>আপনার মোবাইল</label> <br />
              <input
                type="text"
                placeholder="আপনার মোবাইল লিখুন"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>আপনার এরিয়া সিলেক্ট করুন</label> <br />
              <select
                name=""
                id=""
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              >
                <option value="">ঢাকার ভিতরে</option>
                <option value="">ঢাকার বাইরে</option>
              </select>
            </div>
          </form>
        </div>
        <div className="basis-5/12 shadow-xl border rounded-md py-3 px-5">
          <h3 className="text-center text-lg pt-3 pb-5">
            পেমেন্ট মেথড সিলেক্ট করুন:
          </h3>
          <div className="mt-3">
            <Tabs>
              <TabList>
                <Tab>
                  <div className="flex gap-2 items-center">
                    <Image src={Bkash} alt="" width={30} height={30} />
                    <span> বিকাশ</span>
                  </div>
                </Tab>
                <Tab>
                  <div className="flex gap-2 items-center">
                    <Image src={Nagad} alt="" width={30} height={30} />
                    <span> নগদ</span>
                  </div>
                </Tab>
                <Tab>
                  <div className="flex gap-2 items-center">
                    <Image src={Rocket} alt="" width={30} height={30} />
                    <span>রকেট</span>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                <div>
                  <p className="leading-[26px]">
                    01. Go to your bKash app or Dial *247# <br /> 02. Choose
                    “Send Money” <br /> 03. Enter below bKash Account Number
                    <br /> 04. Enter <b>total amount</b> <br /> 06. Now enter
                    your bKash Account PIN to confirm the transaction <br /> 07.
                    Copy Transaction ID from payment confirmation message and
                    paste that Transaction ID below
                  </p>
                  <div>
                    You need to send us <b>৳&nbsp;270.00</b>
                  </div>
                  <div>
                    <div>
                      <div>
                        <p>
                          Account Type: <b>Personal</b>
                        </p>
                        <p>
                          Account Number: <b>01760107764</b>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label>Your bKash Account Number</label> <br />
                    <input
                      type="text"
                      placeholder="01XXXXXXXXX"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                      required
                    />
                    <br />
                    <label>bKash Transaction ID</label> <br />
                    <input
                      type="text"
                      placeholder="2M2A8"
                      required
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <p className="leading-[26px]">
                    01. Go to your Nagad app or Dial *167# <br /> 02. Choose
                    “Send Money” <br /> 03. Enter below Nagad Account Number
                    <br /> 04. Enter <b>total amount</b> <br /> 06. Now enter
                    your Nagad Account PIN to confirm the transaction <br /> 07.
                    Copy Transaction ID from payment confirmation message and
                    paste that Transaction ID below
                  </p>
                  <div>
                    You need to send us <b>৳&nbsp;270.00</b>
                  </div>
                  <div>
                    <div>
                      <div>
                        <p>
                          Account Type: <b>Personal</b>
                        </p>
                        <p>
                          Account Number: <b>01760107764</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label>Your nagad Account Number</label> <br />
                    <input
                      type="text"
                      placeholder="01XXXXXXXXX"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                      required
                    />
                    <br />
                    <label>nagad Transaction ID</label> <br />
                    <input
                      type="text"
                      placeholder="2M2A8"
                      required
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <p className="leading-[26px]">
                    01. Go to your Rocket app or Dial *322# <br /> 02. Choose
                    “Send Money” <br /> 03. Enter below Rocket Account Number
                    <br /> 04. Enter <b>total amount</b> <br /> 06. Now enter
                    your Rocket Account PIN to confirm the transaction
                    <br /> 07. Copy Transaction ID from payment confirmation
                    message and paste that Transaction ID below
                  </p>
                  <div>
                    You need to send us <b>৳&nbsp;270.00</b>
                  </div>
                  <div>
                    <div>
                      <div>
                        <p>
                          Account Type: <b>Personal</b>
                        </p>
                        <p>
                          Account Number: <b>01760107764</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label>Your Rocket Account Number</label> <br />
                    <input
                      type="text"
                      placeholder="01XXXXXXXXX"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                      required
                    />
                    <br />
                    <label>Rocket Transaction ID</label> <br />
                    <input
                      type="text"
                      placeholder="2M2A8"
                      required
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <button
              type="submit"
              className="mt-3 bg-sky-700 text-white py-2 px-4 rounded w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
