import Header from "@/components/header/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <footer className="flex justify-center items-center p-4 text-grayHoverColor">
        <p>Copyright &copy; 2024-All right reserved by AmazonShop</p>
      </footer>
    </div>
  );
}
