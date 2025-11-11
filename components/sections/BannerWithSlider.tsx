"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/styles/hero-banner.css";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Icons from "../Icons";
import Image from "next/image";
import Link from "next/link";
import { BannerSliderType } from "@/types/bannerSlider";
import "@/styles/form.css";
import "@/styles/contact.css";
import Form from "../Form";
import TextField from "../TextField";
import TextArea from "../TextArea";
import { ContactData } from '@/data/sections/contactData';

const BannerWithSlider = ({ data }: { data: BannerSliderType }) => {
    const {
        wrapperCls,
        backgroundImage,
        subheading,
        heading,
        styledText,
        text,
        button,
        phone,
        logoIconName,
        slides,
        navigation
    } = data || {};
    
    const LogoIcon = logoIconName ? Icons[logoIconName] : null;

    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const clearMessage = (time: number) => {
        setTimeout(() => {
            setMessage("");
        }, time);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const form = event.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const formMessage = await response.json();

            if (response.ok) {
                setLoading(false);
                setStatus("success");
                setMessage(formMessage.message);
                form.reset();
                clearMessage(6000);
            } else {
                setLoading(false);
                setStatus("error");
                setMessage(formMessage.error);
                clearMessage(4000);
            }
        } catch (error: any) {
            setLoading(false);
            setStatus("error");
            setMessage(error.message);
            clearMessage(4000);
        }        
    };

    // Swiper refs
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    // Refs for custom navigation buttons
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    // Attach navigation after both swiper and refs are ready
    useEffect(() => {
        if (
            swiperInstance &&
            prevRef.current &&
            nextRef.current &&
            swiperInstance.params.navigation
        ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiperInstance.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className={`hero-banner ${wrapperCls}`}>
            <div className="media media-bg">
                <Image
                    src={backgroundImage}
                    alt="slider background"
                    width={1920}
                    height={1000}
                    loading="eager"
                />
            </div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center lg:gap-1">
                    <div className="lg:col-span-6 col-span-1">
                        <div className="content section-headings">
                            {subheading && 
                                <Subheading 
                                    title={subheading}
                                    cls="text-20"
                                />
                            }

                            {heading &&
                                <Heading 
                                    title={heading}
                                    styledText={styledText}
                                    styledTextCls="decorated-text"
                                    cls="text-80 fw-700"
                                    aos="fade-up"
                                    aosDelay="100"
                                />
                            }

                            {text && 
                                <Text 
                                    text={text}
                                    cls="text-18"
                                    aos="fade-up"
                                    aosDelay="150"
                                />
                            }

                            <div
                                className="hero-button-wrap buttons"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {button && button.type == 'primary' &&
                                    <PrimaryButton 
                                        label={button.label}
                                        href={button.href}
                                        ariaLabel={button.label}
                                    />
                                }

                                {button && button.type == 'secondary' &&
                                    <SecondaryButton 
                                        label={button.label}
                                        href={button.href}
                                        ariaLabel={button.label}
                                    />
                                }

                                {phone && 
                                    <Link
                                        href={`tel:${phone}`}
                                        className="hero-phone-call"
                                        aria-label="Phone number"
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                    >
                                        <Icons.PhoneLarge />
                                        <div className="hero-call">
                                            <div className="text text-14">Need help?</div>
                                            <div className="text text-16">{phone}</div>
                                        </div>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 col-span-1 col-contact-form section-contact-form">
                          <div className="contact-form-wrap radius18">
                            {ContactData.block &&
                                <div className="contact-form-headings">
                                    {ContactData.block.heading &&
                                        <h2 className="heading text-32" data-aos="fade-up">
                                            {ContactData.block.heading}
                                        </h2>
                                    }

                                    {ContactData.block.text &&
                                        <p className="text text-16" data-aos="fade-up">
                                            {ContactData.block.text}
                                        </p>
                                    }
                                </div>
                            }

                            <Form 
                                cls="form contact-form main-contact-form" 
                                onSubmitHandler={handleSubmit}
                            >
                                <TextField 
                                    cls="text-16"
                                    id="ContactForm-name"
                                    label="Your Name"
                                    type="text"
                                    placeholder="Your Name*"
                                    name="name"
                                    required={true}
                                />

                                <TextField 
                                    cls="text-16"
                                    id="ContactForm-email"
                                    label="Your Email"
                                    type="email"
                                    placeholder="Email Here*"
                                    name="email"
                                    required={false}
                                />

                                <TextField 
                                    cls="text-16"
                                    id="ContactForm-service"
                                    label="Service Type"
                                    type="text"
                                    placeholder="Service Type"
                                    name="service"
                                    required={false}
                                />

                                <TextArea 
                                    cls="text-16"
                                    id="ContactForm-body"
                                    label="Your Comment"
                                    placeholder="Your Message*"
                                    name="message"
                                    required={true}
                                />

                                <div
                                    className="form-button" 
                                    data-aos="fade-up"
                                >
                                    {loading ? (
                                        <SecondaryButton 
                                            cls="loading"
                                            label="Sending..."
                                            ariaLabel="Sending message"
                                        />
                                    ) : (
                                        <SecondaryButton 
                                            label="Send Message"
                                            ariaLabel="Send Message"
                                        />
                                    )}
                                </div>
                            </Form>

                            {status === "success" && (
                                <p className="text-16 fw-500 text-green-600 !mt-1">{message}</p>
                            )}

                            {status === "error" && (
                                <p className="text-16 fw-500 text-red-600 !mt-1">{message}</p>
                            )}
                        </div>      
                    </div>
                </div>
            </div>
      </div>
    )
}

export default BannerWithSlider;