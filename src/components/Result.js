import React from 'react';
import { useLocation } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { selectedItem, selectedMaterial, quantities } = location.state;

  const data = {
    Бобовка: {
      Объекты: { "Устройство отслеживания стрельбы": {Бобовка: 50, Сера: 6000 }, "Установка с автоматической винтовкой": {Бобовка: 50, Сера: 6000 },
     "Автоматаическая установка для картечи": {Бобовка: 50, Сера: 6000 }, "Торговый бот": {Бобовка: 668, Сера: 80160 }, "Электромагнитная турель": {Бобовка: 50, Сера: 6000},
     "Ракетная пусковая установка": {Бобовка: 50, Сера: 6000}
    },
     
      Дерево: { Дверь: { Бобовка: 2, Сера: 240 }, Стена: { Бобовка: 4, Сера: 480 }, Фундамент: { Бобовка: 15, Сера: 1800 } },
      Камень: { Дверь: { Бобовка: 3, Сера: 360 }, Стена: { Бобовка: 10, Сера: 1200 }, Фундамент: { Бобовка: 40, Сера: 4800 } },
      Железо: { Дверь: { Бобовка: 30, Сера: 3600 }, Стена: { Бобовка: 100, Сера: 12000 }, Фундамент: { Бобовка: 400, Сера: 48000 }, "Складная лестница": { Бобовка: 46, Сера: 5520 }, "Решетка": { Бобовка: 0, Сера: 0 } },
      "Отличное железо": { Дверь: { Бобовка: 200, Сера: 24000 }, Стена: { Бобовка: 667, Сера: 80040 }, Фундамент: { Бобовка: 2267, Сера: 320040 }, "Складная лестница": { Бобовка: 275, Сера: 33000 }, "Решетка": { Бобовка: 0, Сера: 0 } },
      Титан: { Дверь: { Бобовка: 800, Сера: 96000 }, Стена: { Бобовка: 2267, Сера: 32040 }, Фундамент: { Бобовка: 0, Сера: 0 }, "Складная лестница": { Бобовка: 1112, Сера: 133440 }, "Решетка": { Бобовка: 0, Сера: 0 } },
    },
    Динамит: {
      Объекты: { "Устройство отслеживания стрельбы": {Динамит: 7, Сера: 3500 }, "Установка с автоматической винтовкой": {Динамит: 7, Сера: 3500 },
     "Автоматаическая установка для картечи": {Динамит: 7, Сера: 3500 }, "Торговый бот": {Динамит: 68, Сера: 34000 }, "Электромагнитная турель": {Динамит: 7, Сера: 3500},
     "Ракетная пусковая установка": {Динамит: 7, Сера: 3500}
    },

      Дерево: { Дверь: { Динамит: 1, Сера: 500 }, Стена: { Динамит: 2, Сера: 1000 }, Фундамент: { Динамит: 8, Сера: 4000 } },
      Камень: { Дверь: { Динамит: 2, Сера: 1000 }, Стена: { Динамит: 5, Сера: 2500 }, Фундамент: { Динамит: 20, Сера: 10000 } },
      Железо: { Дверь: { Динамит: 4, Сера: 2000 }, Стена: { Динамит: 13, Сера: 6500 }, Фундамент: { Динамит: 50, Сера: 25000 }, "Складная лестница": { Динамит: 7, Сера: 3500 }, "Решетка": { Динамит: 0, Сера: 0 } },
      "Отличное железо": { Дверь: { Динамит: 20, Сера: 10000 }, Стена: { Динамит: 67, Сера: 33500 }, Фундамент: { Динамит: 267, Сера: 133500 }, "Складная лестница": { Динамит: 28, Сера: 14000 }, "Решетка": { Динамит: 0, Сера: 0 } },
      Титан: { Дверь: { Динамит: 80, Сера: 40000 }, Стена: { Динамит: 200, Сера: 100000 }, Фундамент: { Динамит: 800, Сера: 400000 }, "Складная лестница": { Динамит: 28, Сера: 14000 }, "Решетка": { Динамит: 0, Сера: 0 } },
    },
    "Военная С4": {
      Объекты: { "Устройство отслеживания стрельбы": {"Военная С4": 3, Сера: 4500 }, "Установка с автоматической винтовкой": {"Военная С4": 3, Сера: 4500 },
     "Автоматаическая установка для картечи": {"Военная С4": 3, Сера: 4500 }, "Торговый бот": {"Военная С4": 13, Сера: 19500 }, "Электромагнитная турель": {"Военная С4": 3, Сера: 4500},
     "Ракетная пусковая установка": {"Военная С4": 3, Сера: 4500}
    },

      Дерево: { Дверь: { "Военная С4": 1, Сера: 1500 }, Стена: { "Военная С4": 2, Сера: 3000 }, Фундамент: { "Военная С4": 5, Сера: 7500 } },
      Камень: { Дверь: { "Военная С4": 1, Сера: 1500 }, Стена: { "Военная С4": 4, Сера: 6000 }, Фундамент: { "Военная С4": 13, Сера: 19500 } },
      Железо: { Дверь: { "Военная С4": 2, Сера: 3000 }, Стена: { "Военная С4": 6, Сера: 9000 }, Фундамент: { "Военная С4": 24, Сера: 36000 }, "Складная лестница": { "Военная С4": 3, Сера: 4500 }, "Решетка": { "Военная С4": 0, Сера: 0 } },
      "Отличное железо": { Дверь: { "Военная С4": 4, Сера: 6000 }, Стена: { "Военная С4": 13, Сера: 19500 }, Фундамент: { "Военная С4": 49, Сера: 73500 }, "Складная лестница": { "Военная С4": 6, Сера: 9000 }, "Решетка": { "Военная С4": 0, Сера: 0 } },
      Титан: { Дверь: { "Военная С4": 14, Сера: 21000 }, Стена: {"Военная С4": 34, Сера: 51000 }, Фундамент: { "Военная С4": 136, Сера: 204000 }, "Складная лестница": { "Военная С4": 15, Сера: 22500 }, "Решетка": { "Военная С4": 0, Сера: 0 } },
    },
    Гексоген: {
      Объекты: { "Устройство отслеживания стрельбы": {Гексоген: 2, Сера: 5000 }, "Установка с автоматической винтовкой": {Гексоген: 2, Сера: 5000 },
     "Автоматаическая установка для картечи": {Гексоген: 2, Сера: 5000 }, "Торговый бот": {Гексоген: 6, Сера: 15000 }, "Электромагнитная турель": {Гексоген: 2, Сера: 5000},
     "Ракетная пусковая установка": {Гексоген: 2, Сера: 5000}
    },

      Дерево: { Дверь: { Гексоген: 1, Сера: 2500 }, Стена: { Гексоген: 1, Сера: 2500 }, Фундамент: { Гексоген: 2, Сера: 5000 } },
      Камень: { Дверь: { Гексоген: 1, Сера: 2500 }, Стена: { Гексоген: 2, Сера: 5000 }, Фундамент: { Гексоген: 6, Сера: 15000 } },
      Железо: { Дверь: { Гексоген: 1, Сера: 2500 }, Стена: { Гексоген: 3, Сера: 7500 }, Фундамент: { Гексоген: 10, Сера: 25000 }, "Складная лестница": { Гексоген: 1, Сера: 2500 }, "Решетка": { Гексоген: 3, Сера: 7500 } },
      "Отличное железо": { Дверь: { Гексоген: 2, Сера: 5000 }, Стена: { Гексоген: 6, Сера: 15000 }, Фундамент: { Гексоген: 17, Сера: 42500 }, "Складная лестница": { Гексоген: 3, Сера: 7500}, "Решетка": { Гексоген: 6, Сера: 15000 } }, 
      Титан: { Дверь: { Гексоген: 4, Сера: 10000 }, Стена: { Гексоген: 10, Сера: 25000 }, Фундамент: { Гексоген: 40, Сера: 100000 }, "Складная лестница": { Гексоген: 6, Сера: 15000}, "Решетка": { Гексоген: 0, Сера: 0 } },
    },
    "Простая ракета": {
      Объекты: { "Устройство отслеживания стрельбы": {"Простая ракета": 0, Сера: 0 }, "Установка с автоматической винтовкой": {"Простая ракета": 0, Сера: 0 },
     "Автоматаическая установка для картечи": {"Простая ракета": 0, Сера: 0 }, "Торговый бот": {"Простая ракета": 0, Сера: 0 }, "Электромагнитная турель": {"Простая ракета": 0, Сера: 0},
     "Ракетная пусковая установка": {"Простая ракета": 0, Сера: 0}
    },

      Дерево: { Дверь: { "Простая ракета": 2, Сера: 600 }, Стена: { "Простая ракета": 6, Сера: 1800 }, Фундамент: { "Простая ракета": 22, Сера: 6600 } },
      Камень: { Дверь: { "Простая ракета": 5, Сера: 1500 }, Стена: { "Простая ракета": 16, Сера: 4800 }, Фундамент: { "Простая ракета": 61, Сера: 18300 } },
      Железо: { Дверь: { "Простая ракета": 9, Сера: 2700 }, Стена: { "Простая ракета": 30, Сера: 9000 }, Фундамент: { "Простая ракета": 120, Сера: 36000 }, "Складная лестница": { "Простая ракета": 15, Сера: 4500 }, "Решетка": { "Простая ракета": 30, Сера: 9000 } },
      "Отличное железо": { Дверь: { "Простая ракета": 93, Сера: 27900 }, Стена: { "Простая ракета": 308, Сера: 92400 }, Фундамент: { "Простая ракета": 1231, Сера: 369300 }, "Складная лестница": { "Простая ракета": 156, Сера: 46800}, "Решетка": { "Простая ракета": 156, Сера: 46800 } }, 
      Титан: { Дверь: { "Простая ракета": 400, Сера: 120000 }, Стена: { "Простая ракета": 0, Сера: 0 }, Фундамент: { "Простая ракета": 0, Сера: 0 }, "Складная лестница": { "Простая ракета": 0, Сера: 0}, "Решетка": { "Простая ракета": 0, Сера: 0 } },
    },
    Ракета: {
      Объекты: { "Устройство отслеживания стрельбы": {Ракета: 3, Сера: 4500 }, "Установка с автоматической винтовкой": {Ракета: 3, Сера: 4500 },
     "Автоматаическая установка для картечи": {Ракета: 3, Сера: 4500 }, "Торговый бот": {Ракета: 13, Сера: 19500 }, "Электромагнитная турель": {Ракета: 3, Сера: 4500},
     "Ракетная пусковая установка": {Ракета: 3, Сера: 4500}
    },

      Дерево: { Дверь: { Ракета: 1, Сера: 1500 }, Стена: { Ракета: 2, Сера: 3000 }, Фундамент: { Ракета: 5, Сера: 7500 } },
      Камень: { Дверь: { Ракета: 1, Сера: 1500 }, Стена: { Ракета: 4, Сера: 6000 }, Фундамент: { Ракета: 13, Сера: 19500 } },
      Железо: { Дверь: { Ракета: 2, Сера: 3000 }, Стена: { Ракета: 6, Сера: 9000 }, Фундамент: { Ракета: 24, Сера: 36000 }, "Складная лестница": { Ракета: 3, Сера: 4500 }, "Решетка": { Ракета: 3, Сера: 4500 } },
      "Отличное железо": { Дверь: { Ракета: 4, Сера: 6000 }, Стена: { Ракета: 13, Сера: 19500 }, Фундамент: { Ракета: 49, Сера: 73500 }, "Складная лестница": { Ракета: 6, Сера: 9000}, "Решетка": { Ракета: 6, Сера: 9000 } }, 
      Титан: { Дверь: { Ракета: 14, Сера: 21000 }, Стена: { Ракета: 34, Сера: 51000 }, Фундамент: { Ракета: 136, Сера: 204000 }, "Складная лестница": { Ракета: 15, Сера: 22500}, "Решетка": { Ракета: 19, Сера: 28500 } },
    },
    Граната: {
      Объекты: { "Устройство отслеживания стрельбы": {Граната: 15, Сера: 4500 }, "Установка с автоматической винтовкой": {Граната: 15, Сера: 4500 },
     "Автоматаическая установка для картечи": {Граната: 15, Сера: 4500 }, "Торговый бот": {Граната: 80, Сера: 24000 }, "Электромагнитная турель": {Граната: 15, Сера: 4500},
     "Ракетная пусковая установка": {Граната: 15, Сера: 4500}
    },

      Дерево: { Дверь: { Граната: 2, Сера: 600 }, Стена: { Граната: 6, Сера: 1800 }, Фундамент: { Граната: 22, Сера: 6600 } },
      Камень: { Дверь: { Граната: 5, Сера: 1500 }, Стена: { Граната: 16, Сера: 4800 }, Фундамент: { Граната: 61, Сера: 18300 } },
      Железо: { Дверь: { Граната: 9, Сера: 2700 }, Стена: { Граната: 30, Сера: 9000 }, Фундамент: { Граната: 120, Сера: 36000 }, "Складная лестница": { Граната: 15, Сера: 4500 }, "Решетка": { Граната: 15, Сера: 4500 } },
      "Отличное железо": { Дверь: { Граната: 19, Сера: 5700 }, Стена: { Граната: 61, Сера: 18300 }, Фундамент: { Граната: 251, Сера: 75300 }, "Складная лестница": { Граната: 31, Сера: 9300}, "Решетка": { Граната: 26, Сера: 7800 } }, 
      Титан: { Дверь: { Граната: 64, Сера: 19200 }, Стена: { Граната: 0, Сера: 0 }, Фундамент: { Граната: 0, Сера: 0 }, "Складная лестница": { Граната: 0, Сера: 0}, "Решетка": { Граната: 0, Сера: 0 } },
    },
    "Граната из сплава": {
      Объекты: { "Устройство отслеживания стрельбы": {"Граната из сплава": 10, Сера: 6000 }, "Установка с автоматической винтовкой": {"Граната из сплава": 10, Сера: 6000 },
     "Автоматаическая установка для картечи": {"Граната из сплава": 10, Сера: 6000 }, "Торговый бот": {"Граната из сплава": 39, Сера: 23400 }, "Электромагнитная турель": {"Граната из сплава": 10, Сера: 6000},
     "Ракетная пусковая установка": {"Граната из сплава": 10, Сера: 6000}
    },

      Дерево: { Дверь: { "Граната из сплава": 2, Сера: 1200 }, Стена: { "Граната из сплава": 4, Сера: 2400 }, Фундамент: { "Граната из сплава": 15, Сера: 9000 } },
      Камень: { Дверь: { "Граната из сплава": 4, Сера: 2400 }, Стена: { "Граната из сплава": 12, Сера: 7200 }, Фундамент: { "Граната из сплава": 45, Сера: 27000 } },
      Железо: { Дверь: { "Граната из сплава": 6, Сера: 3600 }, Стена: { "Граната из сплава": 19, Сера: 11400 }, Фундамент: { "Граната из сплава": 75, Сера: 45000 }, "Складная лестница": { "Граната из сплава": 10, Сера: 6000 }, "Решетка": { "Граната из сплава": 10, Сера: 6000 } },
      "Отличное железо": { Дверь: { "Граната из сплава": 12, Сера: 7200 }, Стена: { "Граната из сплава": 40, Сера: 24000 }, Фундамент: { "Граната из сплава": 160, Сера: 96000 }, "Складная лестница": { "Граната из сплава": 20, Сера: 12000}, "Решетка": { "Граната из сплава": 17, Сера: 10200 } }, 
      Титан: { Дверь: { "Граната из сплава": 30, Сера: 18000 }, Стена: { "Граната из сплава": 75, Сера: 45000 }, Фундамент: { "Граната из сплава": 292, Сера: 175200 }, "Складная лестница": { "Граната из сплава": 41, Сера: 24600}, "Решетка": { "Граната из сплава": 0, Сера: 0 } },
    },
    "Ракета РСЗО": {
      Объекты: { "Устройство отслеживания стрельбы": {"Ракета РСЗО": 0, Сера: 0 }, "Установка с автоматической винтовкой": {"Ракета РСЗО": 0, Сера: 0 },
     "Автоматаическая установка для картечи": {"Ракета РСЗО": 0, Сера: 0 }, "Торговый бот": {"Ракета РСЗО": 0, Сера: 0 }, "Электромагнитная турель": {"Ракета РСЗО": 0, Сера: 0},
     "Ракетная пусковая установка": {"Ракета РСЗО": 0, Сера: 0}
    },

      Дерево: { Дверь: { "Ракета РСЗО": 0, Сера: 0 }, Стена: { "Ракета РСЗО": 6, Сера: 1200 }, Фундамент: { "Ракета РСЗО": 24, Сера: 4800 } },
      Камень: { Дверь: { "Ракета РСЗО": 0, Сера: 0 }, Стена: { "Ракета РСЗО": 12, Сера: 2400 }, Фундамент: { "Ракета РСЗО": 42, Сера: 8400 } },
      Железо: { Дверь: { "Ракета РСЗО": 0, Сера: 0 }, Стена: { "Ракета РСЗО": 23, Сера: 4600 }, Фундамент: { "Ракета РСЗО": 98, Сера: 19600 }, "Складная лестница": { "Ракета РСЗО": 0, Сера: 0 }, "Решетка": { "Ракета РСЗО": 0, Сера: 0 } },
      "Отличное железо": { Дверь: { "Ракета РСЗО": 0, Сера: 0 }, Стена: { "Ракета РСЗО": 65, Сера: 13000 }, Фундамент: { "Ракета РСЗО": 270, Сера: 54000 }, "Складная лестница": { "Ракета РСЗО": 20, Сера: 4000}, "Решетка": { "Ракета РСЗО": 17, Сера: 3400 } }, 
      Титан: { Дверь: { "Ракета РСЗО": 0, Сера: 0 }, Стена: { "Ракета РСЗО": 70, Сера: 14000 }, Фундамент: { "Ракета РСЗО": 351, Сера: 70200 }, "Складная лестница": { "Ракета РСЗО": 0, Сера: 0}, "Решетка": { "Ракета РСЗО": 0, Сера: 0 } },
    },
    Объекты: {
      "Устройства для отслеживание стрельбы": { Бобовка: { Бобовка: 12, Сера: 6 }, Динамит: { Динамит: 22, Сера: 11 }, "Автоматическая установка для картечи": { Бобовка: 32, Сера: 16 }, "Тарговый бот": {Бобовка: 40, Сера: 50 } },
    }
    // Добавьте остальные элементы здесь
  };

  const totalPrimary = Object.keys(quantities).reduce((total, item) => {
    const primaryValue = data[selectedItem]?.[selectedMaterial]?.[item]?.[selectedItem];
    return total + (quantities[item] * (isNaN(primaryValue) ? 0 : primaryValue));
  }, 0);

  const totalSulfur = Object.keys(quantities).reduce((total, item) => {
    const sulfurValue = data[selectedItem]?.[selectedMaterial]?.[item]?.Сера;
    return total + (quantities[item] * (isNaN(sulfurValue) ? 0 : sulfurValue));
  }, 0);


  return (
    <div className="result">
      <h1>Результат</h1>
      <p>Выбранный элемент: {selectedItem}</p>
      <p>Выбранный материал: {selectedMaterial}</p>
      <table>
        <thead>
          <tr>
            <th>Элемент</th>
            <th>Количество</th>
            <th>{selectedItem}</th>
            <th>Сера</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(quantities).map((item) => (
            quantities[item] > 0 && (
              <tr key={item}>
                <td>{item}</td>
                <td>{quantities[item]}</td>
                <td>{isNaN(quantities[item] * data[selectedItem]?.[selectedMaterial]?.[item]?.[selectedItem]) ? '0' : (quantities[item] * data[selectedItem]?.[selectedMaterial]?.[item]?.[selectedItem]).toString()}</td>
                <td>{isNaN(quantities[item] * data[selectedItem]?.[selectedMaterial]?.[item]?.Сера) ? '0' : (quantities[item] * data[selectedItem]?.[selectedMaterial]?.[item]?.Сера).toString()}</td>
              </tr>
            )
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Итого</td>
            <td></td>
            <td>{isNaN(totalPrimary) ? '0' : totalPrimary.toString()}</td>
            <td>{isNaN(totalSulfur) ? '0' : totalSulfur.toString()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Result;
