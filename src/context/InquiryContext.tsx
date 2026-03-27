import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/products";

interface InquiryContextType {
  inquiryList: Product[];
  addToInquiry: (product: Product) => void;
  removeFromInquiry: (productId: string) => void;
  clearInquiry: () => void;
  isInInquiry: (productId: string) => boolean;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [inquiryList, setInquiryList] = useState<Product[]>(() => {
    const saved = localStorage.getItem("alghani_inquiry_list");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("alghani_inquiry_list", JSON.stringify(inquiryList));
  }, [inquiryList]);

  const addToInquiry = (product: Product) => {
    if (!inquiryList.find((p) => p.id === product.id)) {
      setInquiryList((prev) => [...prev, product]);
    }
  };

  const removeFromInquiry = (productId: string) => {
    setInquiryList((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearInquiry = () => {
    setInquiryList([]);
  };

  const isInInquiry = (productId: string) => {
    return !!inquiryList.find((p) => p.id === productId);
  };

  return (
    <InquiryContext.Provider
      value={{
        inquiryList,
        addToInquiry,
        removeFromInquiry,
        clearInquiry,
        isInInquiry,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
