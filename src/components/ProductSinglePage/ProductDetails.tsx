"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import AddToCartButton from "../Product/addToCartButton";
import axios from "@/hooks/hook.axios";
import { FaOpencart } from "react-icons/fa";
import { useRootContext } from "@/context/root.context";
const ProductDetails = () => {
  const [attributes, setAttributes] = useState({});
  // const [activeAttr, setActiveAttr] = useState({});
  const sech: any = useSearchParams();
  const { Cart, settingsData }: any = useRootContext();
  const ID = sech.get("_id");
  const { data: product, refetch } = useQueryData(
    ["get single data"],
    `/api/v0/product/${ID}`
  );
  const [imageUrl, setImageUrl] = useState(
    `${product?.data?.product_image?.img_url}`
  );
  const [quantity, setQuantity] = useState(1);
  const handleQuantityPlus = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("You can't buy over 10");
    }
  };
  const handleQuantityMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      toast.error("You can't select less then 0");
    }
  };
  const findUnselectedVariantName = (variantData: any, activeVariant: any) => {
    const selectedOptions = new Set(Object.values(activeVariant));
    for (const variant of variantData) {
      const variantLabel = variant.value;
      const variantOptions = new Set(
        variant.attribute_options.map((option: any) => option.value)
      );
      if (
        !(variantLabel in activeVariant) ||
        !variantOptions.has(activeVariant[variantLabel])
      ) {
        return variantLabel;
      }
    }
    return null;
  };
  const handleAddToCart = (ID: any) => {
    try {
      console.log(
        product?.data?.variants?.length,
        Object.keys(attributes).length
      );
      if (
        product?.data?.variants?.length > 0 &&
        Object.keys(attributes).length < product?.data?.variants?.length
      ) {
        const variant = findUnselectedVariantName(
          product?.data?.variants,
          attributes
        );
        throw new Error(`${variant} is not selected`);
      }
      const url = `/api/v0/cart/add?productID=${ID}&quantity=${quantity}`;
      axios
        .put(url, { variants: attributes })
        .then(() => {
          toast.success("product added to cart");
          Cart.refetch();
        })
        .catch((error: any) =>
          toast.error(error.message ? error.message : error?.data.message)
        );
    } catch (error) {
      toast.error(error.message ? error.message : error?.data.message);
    }
  };

  const handleAttributes = (e: any) => {
    e.preventDefault();
    setAttributes((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    refetch();
    setImageUrl(product?.data?.product_image?.img_url);
  }, [ID, product]);
  return (
    <div className="lg:flex gap-5">
      <div className="lg:basis-1/2">
        <Image
          src={imageUrl}
          className="w-full h-[300px] md:h-[720px] rounded cursor-pointer"
          alt=""
          width={580}
          height={720}
          sizes="100%"
        />
        <div className="grid grid-cols-6 gap-3 mt-2">
          {[
            ...product?.data?.gallery_images,
            { img_url: product?.data?.product_image?.img_url },
          ]?.map((item, index) => (
            <Image
              key={index}
              src={item?.img_url}
              className="sm:w-20 h-14 md:h-20 rounded cursor-pointer object-contain"
              alt="Product Image"
              onClick={() => setImageUrl(item?.img_url)}
              width={56}
              height={56}
            />
          ))}
        </div>
      </div>
      <div className="lg:basis-1/2 pt-6">
        <h2 className="text-xl md:text-3xl font-medium text-slate-800">
          {product?.data?.title}
        </h2>

        <div className="mt-2">
          <p>
            <b className="text-lg me-2"> Price:</b>
            {product?.data?.discount_price ? (
              <>
                <span className="text-green-600 font-medium text-lg me-2">
                  Tk {product?.data?.discount_price}
                </span>
                <span className="line-through text-gray-500 ">
                  Tk {product?.data?.regular_price}
                </span>
              </>
            ) : (
              <span className="text-green-600 font-medium text-lg me-2">
                Tk {product?.data?.regular_price}
              </span>
            )}
          </p>
        </div>
        {product?.data?.variants?.map((variant: any, i: any) => {
          if (variant.value === "color") {
            return (
              <div className="mt-4 flex items-center" key={i}>
                <p className="me-4 text-gray-500 capitalize text-lg">
                  {variant.label}:
                </p>
                <div className="flex gap-4 items-center">
                  {variant.attribute_options?.map((colorItem: any) => {
                    return (
                      <input
                        defaultValue={colorItem.value}
                        name={variant.value}
                        onClick={handleAttributes}
                        className={`${
                          attributes[variant.value] === colorItem.value
                            ? "w-5 h-5"
                            : ""
                        } uppercase text-[0px] w-4 h-4 px-2 rounded-full cursor-pointer outline-none`}
                        readOnly
                        style={{ background: `${colorItem?.value}` }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div className="mt-4 flex items-center" key={i}>
                <p className="me-4 text-gray-500 text-lg">{variant.label}:</p>
                <div className="flex gap-2">
                  {variant?.attribute_options?.map((sizeItem: any) => (
                    <input
                      onClick={handleAttributes}
                      defaultValue={sizeItem.value}
                      name={variant.value}
                      readOnly
                      className={`${
                        attributes[variant.value] === sizeItem.value
                          ? "bg-sky-600 text-white"
                          : ""
                      } uppercase text-sm rounded-full hover:bg-sky-600 hover:text-white w-6 h-6 outline-none cursor-pointer text-center
                      `}
                    />
                  ))}
                </div>
              </div>
            );
          }
        })}

        <div className="mt-3 flex items-center">
          <p className="me-2 text-lg">Quantity:</p>
          <div className="flex gap-1 me-3">
            <span
              onClick={handleQuantityMinus}
              className="border border-gray-300 px-1 rounded-sm cursor-pointer"
            >
              -
            </span>
            <input
              type="text"
              value={quantity}
              min={"1"}
              max={"10"}
              className="w-10 border border-gray-300 outline-none text-center"
            />
            <span
              onClick={handleQuantityPlus}
              className="border border-gray-300 px-1 rounded-sm cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <AddToCartButton
            product={product?.data}
            Q={quantity}
            A={{ variants: attributes }}
          />
          <button
            onClick={() => handleAddToCart(product?.data?._id)}
            className="bg-orange-600 text-white px-3 py-2 text-[13px] rounded-sm w-full font-semibold transition-colors duration-300 flex items-center justify-center gap-1"
          >
            <FaOpencart />
            কার্ট করুন
          </button>
        </div>
        <div className="mt-2 w-full">
          <Link
            href={`tel:${settingsData?.header?.phone_number}`}
            className="bg-blue-500 text-white px-10 rounded-sm py-2 w-full text-center flex items-center justify-center gap-1"
          >
            <FaPhoneAlt />
            {settingsData?.header?.phone_number}
          </Link>
        </div>
        <div className="mt-3">
          {settingsData?.shipping?.map((ship: any) => (
            <div className="flex justify-between items-center border-y py-2 px-3">
              <h3 className=" text-[16px] text-blue-400 uppercase">
                {ship?.zone}
              </h3>
              <span className="font-semibold">৳ {ship?.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
