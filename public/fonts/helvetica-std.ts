import localFont from "next/font/local";

export const helveticaStd = localFont({
  variable: "--font-helvetica-std",
  src: [
    {
      path: "./helvetica/HelveticaNeueLTStd-LtCn.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./helvetica/HelveticaNeueLTStd-Cn.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./helvetica/HelveticaNeueLTStd-MdCn.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./helvetica/HelveticaNeueLTStd-BdCn.otf",
      weight: "600",
      style: "normal",
    },
  ],
});
