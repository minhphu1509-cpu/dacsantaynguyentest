import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Leaf, 
  Sun, 
  Droplet, 
  Star, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

// --- Types & Data ---

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cà phê Robusta Buôn Ma Thuột",
    price: 150000,
    category: "Cà phê",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Hạt Mắc ca Lâm Đồng Sấy Nứt",
    price: 320000,
    category: "Hạt dinh dưỡng",
    rating: 5,
    image: "https://images.unsplash.com/photo-1533230635460-70f20967a5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Hồ tiêu Đen Chư Sê",
    price: 180000,
    category: "Gia vị",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Mật ong Hoa Cà phê",
    price: 250000,
    category: "Mật ong",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Bơ Sáp Đắk Lắk (5kg)",
    price: 120000,
    category: "Trái cây",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1559205503-4d436c646092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Ca cao nguyên chất",
    price: 140000,
    category: "Đồ uống",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511381978503-e96b2801e958?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// --- Components ---

const Navbar = ({ cartCount }: { cartCount: number }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-bold font-serif tracking-tighter flex items-center gap-2 ${isScrolled ? 'text-green-850' : 'text-white'}`}>
          <Leaf className="w-6 h-6" />
          <span>TâyNguyên<span className="text-earth">Farm</span></span>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
          <a href="#home" className="hover:text-earth transition-colors">Trang chủ</a>
          <a href="#products" className="hover:text-earth transition-colors">Sản phẩm</a>
          <a href="#about" className="hover:text-earth transition-colors">Về chúng tôi</a>
          <a href="#contact" className="hover:text-earth transition-colors">Liên hệ</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={`relative p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-stone-100 text-stone-800' : 'hover:bg-white/20 text-white'}`}>
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-earth text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className={`md:hidden p-2 rounded-full ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-4 flex flex-col gap-4 text-stone-700 animate-in slide-in-from-top-2">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-stone-50 rounded-lg">Trang chủ</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-stone-50 rounded-lg">Sản phẩm</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-stone-50 rounded-lg">Về chúng tôi</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-stone-50 rounded-lg">Liên hệ</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Highland Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium tracking-wider mb-6">
          100% ORGANIC & TỰ NHIÊN
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
          Tinh Hoa Từ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
            Đại Ngàn Tây Nguyên
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
          Chúng tôi mang đến những sản phẩm nông sản sạch, đậm đà hương vị đất đỏ bazan, được chắt lọc từ những nông trại xanh tốt nhất.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-earth hover:bg-yellow-700 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
            Khám phá ngay <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all">
            Câu chuyện của chúng tôi
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "100% Tự Nhiên",
      description: "Quy trình canh tác hữu cơ, không hóa chất độc hại, bảo vệ sức khỏe người tiêu dùng."
    },
    {
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      title: "Hương Vị Đậm Đà",
      description: "Thổ nhưỡng đất đỏ Bazan màu mỡ tạo nên hương vị đặc trưng không nơi nào có được."
    },
    {
      icon: <Droplet className="w-10 h-10 text-blue-500" />,
      title: "Chế Biến Sạch",
      description: "Công nghệ sấy lạnh và rang xay hiện đại giữ trọn vẹn dưỡng chất của nông sản."
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group border border-stone-100">
              <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3 font-serif">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product; onAdd: () => void }> = ({ product, onAdd }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col h-full">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium text-stone-500">{product.rating}</span>
        </div>
        <h3 className="text-lg font-bold text-stone-800 mb-2 font-serif group-hover:text-green-800 transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-earth">
            {product.price.toLocaleString('vi-VN')}đ
          </span>
          <button 
            onClick={onAdd}
            className="w-10 h-10 rounded-full bg-stone-100 hover:bg-green-800 hover:text-white flex items-center justify-center transition-all active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = ({ onAdd }: { onAdd: () => void }) => {
  const [filter, setFilter] = useState("Tất cả");
  const categories = ["Tất cả", "Cà phê", "Hạt dinh dưỡng", "Gia vị", "Mật ong"];

  const filteredProducts = filter === "Tất cả" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter || (filter === "Hạt dinh dưỡng" && (p.category === "Trái cây" || p.category === "Hạt dinh dưỡng")));

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-serif text-stone-800 mb-4">Sản Phẩm Nổi Bật</h2>
          <div className="w-20 h-1 bg-green-800 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600">
            Tuyển chọn những đặc sản chất lượng nhất từ các nông trại uy tín tại Buôn Ma Thuột, Đà Lạt và Pleiku.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? "bg-green-800 text-white shadow-md" 
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-green-800 font-bold hover:text-green-900 hover:underline underline-offset-4">
            Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-coffee-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621996659490-327595d5c48b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Farmer in Coffee Field" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl font-serif font-bold text-green-800">10+</div>
                  <div className="text-sm text-stone-500 font-medium">Năm Kinh<br/>Nghiệm</div>
                </div>
                <div className="w-full h-1 bg-stone-100 rounded-full">
                  <div className="w-2/3 h-1 bg-green-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-earth font-bold uppercase tracking-widest text-sm mb-2">Về Chúng Tôi</h4>
            <h2 className="text-4xl font-bold font-serif text-stone-800 mb-6">Kết Nối Nông Sản Việt Với Giá Trị Thực</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Xuất phát từ tình yêu với mảnh đất Tây Nguyên đầy nắng và gió, chúng tôi mong muốn mang những hạt cà phê, những hạt tiêu và trái cây ngon nhất đến tận tay người tiêu dùng mà không qua trung gian.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Hợp tác trực tiếp với các nông hộ địa phương",
                "Quy trình kiểm định chất lượng nghiêm ngặt",
                "Đóng gói thân thiện với môi trường",
                "Hỗ trợ sinh kế bền vững cho bà con nông dân"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-800 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-8 py-3 bg-green-800 text-white font-medium rounded-lg hover:bg-green-900 transition-colors shadow-lg shadow-green-900/20">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-green-850 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <Leaf className="w-96 h-96 transform rotate-45" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Bạn Đã Sẵn Sàng Thưởng Thức?</h2>
        <p className="text-green-100 max-w-2xl mx-auto mb-10 text-lg">
          Đặt hàng ngay hôm nay để nhận ưu đãi giảm giá 10% cho đơn hàng đầu tiên và miễn phí vận chuyển toàn quốc.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input 
            type="email" 
            placeholder="Nhập email của bạn" 
            className="px-6 py-4 rounded-full text-stone-800 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="px-8 py-4 bg-yellow-500 text-green-900 font-bold rounded-full hover:bg-yellow-400 transition-colors">
            Đăng Ký Nhận Tin
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold font-serif text-white flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-green-500" />
              <span>TâyNguyên<span className="text-earth">Farm</span></span>
            </a>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Mang hương vị đại ngàn đến từng ngôi nhà Việt. Cam kết chất lượng, uy tín và tận tâm.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-earth hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-earth hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-earth transition-colors">Trang chủ</a></li>
              <li><a href="#products" className="hover:text-earth transition-colors">Sản phẩm</a></li>
              <li><a href="#about" className="hover:text-earth transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Sản Phẩm</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-earth transition-colors">Cà phê Robusta</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Cà phê Arabica</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Hạt Mắc ca</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Hồ tiêu đen</a></li>
              <li><a href="#" className="hover:text-earth transition-colors">Mật ong rừng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-earth flex-shrink-0" />
                <span>123 Đường Nguyễn Tất Thành, TP. Buôn Ma Thuột, Đắk Lắk</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-earth flex-shrink-0" />
                <span>0909 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-earth flex-shrink-0" />
                <span>lienhe@taynguyenfarm.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Nông Sản Tây Nguyên Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Features />
      <ProductsSection onAdd={handleAddToCart} />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}