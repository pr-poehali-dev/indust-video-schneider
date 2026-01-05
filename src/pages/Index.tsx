import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    {
      name: "ATV320",
      category: "Компактные преобразователи",
      power: "0.18 – 15 кВт",
      features: [
        "Простая настройка и установка",
        "Встроенный EMC-фильтр",
        "Защита IP20/IP21",
        "Модбас RTU/TCP"
      ],
      applications: "Конвейеры, вентиляция, насосы"
    },
    {
      name: "ATV630/930",
      category: "Высокопроизводительные системы",
      power: "0.37 – 630 кВт",
      features: [
        "Расширенное управление двигателем",
        "Безопасность SIL2/PLd",
        "Ethernet, Modbus, CANopen",
        "Энергосбережение до 60%"
      ],
      applications: "Производственные линии, экструдеры, насосные станции"
    },
    {
      name: "ATV71/61",
      category: "Универсальные преобразователи",
      power: "0.75 – 500 кВт",
      features: [
        "Точное позиционирование",
        "Встроенная безопасность",
        "Коммуникационные карты",
        "Диагностика в реальном времени"
      ],
      applications: "Упаковка, текстиль, краны"
    }
  ];

  const processes = [
    {
      icon: "Gauge",
      title: "Управление насосами",
      description: "Плавный пуск и остановка насосов, защита от сухого хода, регулирование давления и расхода"
    },
    {
      icon: "Repeat",
      title: "Конвейерные системы",
      description: "Синхронизация скоростей, энергоэффективность, точное позиционирование грузов"
    },
    {
      icon: "Waves",
      title: "Циркуляция жидкости",
      description: "Контроль температуры и давления, минимизация потерь, автоматическая адаптация нагрузки"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Снижение энергопотребления до 60%, оптимизация режимов работы, мониторинг параметров"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-white">Schneider Electric</h1>
              <p className="text-xs text-gray-300">Частотные преобразователи</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-white hover:text-primary transition-colors">Продукты</a>
            <a href="#processes" className="text-white hover:text-primary transition-colors">Применение</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzNEQ0Q1OCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <Badge className="mb-6 bg-primary text-white border-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Инновационные решения для промышленности
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Частотные преобразователи
            <br />
            <span className="text-primary">Schneider Electric</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Профессиональные системы управления электродвигателями для промышленных применений
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="Download" className="mr-2" size={20} />
              Технические данные
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Линейка продуктов</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Частотные преобразователи
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для управления электроприводами любой мощности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  activeProduct === index ? 'border-primary shadow-xl scale-105' : 'border-gray-200'
                }`}
                onMouseEnter={() => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon name="Cpu" className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {product.power}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{product.category}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Типовые применения:</p>
                    <p className="text-sm text-gray-700 font-medium">{product.applications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="processes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-0">Рабочие процессы</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Управление производством
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Интеллектуальные системы для оптимизации промышленных процессов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processes.map((process, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={process.icon as any} className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-secondary mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-bold text-secondary">
                Реальная демонстрация работы
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Activity" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Визуализация параметров</h4>
                    <p className="text-sm text-gray-600">Мониторинг напряжения, тока, частоты в режиме реального времени</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Интеллектуальное управление</h4>
                    <p className="text-sm text-gray-600">Автоматическая адаптация к изменению нагрузки</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Защита оборудования</h4>
                    <p className="text-sm text-gray-600">Многоуровневая система защиты двигателей и сети</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon name="PlayCircle" className="text-white" size={48} />
                    </div>
                    <p className="text-white font-semibold">Видео демонстрация</p>
                    <p className="text-gray-300 text-sm">Промышленный цех в действии</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Преимущества технологии
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingDown" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Экономия до 60%</h3>
                    <p className="text-gray-300">Снижение энергопотребления и эксплуатационных расходов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Увеличение срока службы</h3>
                    <p className="text-gray-300">Плавный пуск защищает двигатели от перегрузок</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Точный контроль</h3>
                    <p className="text-gray-300">Регулирование скорости с точностью до 0.01%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Zap" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-3xl font-bold mb-1">15,000+</p>
                  <p className="text-sm text-gray-300">Установок по миру</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Award" className="text-accent mx-auto mb-2" size={32} />
                  <p className="text-3xl font-bold mb-1">40+</p>
                  <p className="text-sm text-gray-300">Лет на рынке</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-3xl font-bold mb-1">1,200+</p>
                  <p className="text-sm text-gray-300">Партнёров</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon name="Globe" className="text-accent mx-auto mb-2" size={32} />
                  <p className="text-3xl font-bold mb-1">100+</p>
                  <p className="text-sm text-gray-300">Стран присутствия</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-secondary/95 text-white py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={20} />
                </div>
                <span className="font-heading font-bold text-lg">Schneider Electric</span>
              </div>
              <p className="text-gray-300 text-sm">
                Глобальный лидер в области управления энергией и автоматизации
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">ATV320</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ATV630/930</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ATV71/61</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Решения</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Для насосов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для конвейеров</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для вентиляции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 777-99-00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@se.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Schneider Electric. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
