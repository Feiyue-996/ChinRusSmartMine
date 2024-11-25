// 通用配置
const commonOptions = {
    responsive: true, // 启用响应式
    maintainAspectRatio: true, // 保持宽高比
    plugins: {
        legend: {
            labels: {
                color: 'white', // 图例文字颜色为白色
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'white', // 横坐标文字颜色为白色
            },
        },
        y: {
            ticks: {
                color: 'white', // 纵坐标文字颜色为白色
            },
        },
    },
};

// 出入库趋势分析
const stockCtx = document.getElementById('stockChart').getContext('2d');
new Chart(stockCtx, {
    type: 'line',
    data: {
        labels: ['7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '出库',
                data: [100, 120, 150, 200, 250, 220],
                borderColor: '#FFA500',
                borderWidth: 2,
                tension: 0.3,
            },
            {
                label: '入库',
                data: [80, 100, 130, 180, 230, 200],
                borderColor: '#00A5FF',
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    },
    options: commonOptions, // 引用通用配置
});

// 能耗信息
const energyCtx = document.getElementById('energyChart').getContext('2d');
new Chart(energyCtx, {
    type: 'line',
    data: {
        labels: ['7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '能耗 (kWh)',
                data: [400, 600, 800, 500, 700, 900],
                borderColor: '#FFD700',
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    },
    options: commonOptions, // 引用通用配置
});

// 产量分析
const productionCtx = document.getElementById('productionChart').getContext('2d');
new Chart(productionCtx, {
    type: 'bar',
    data: {
        labels: ['7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '产量 (吨)',
                data: [100, 200, 300, 400, 500, 600],
                backgroundColor: '#FFA500',
                borderRadius: 5,
            },
        ],
    },
    options: commonOptions, // 引用通用配置
});


// 获取地图容器
const mapContainer = document.getElementById('map-container');




const container = document.querySelector('.scroll-container');
container.addEventListener('mouseenter', () => {
    cancelAnimationFrame(scrollStep); // 鼠标悬停时暂停滚动
});
container.addEventListener('mouseleave', () => {
    scrollStep(); // 鼠标移开时恢复滚动
});


document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'overview-btn': 'overview-popup',
        'environment-btn': 'environment-popup',
        'production-btn': 'production-popup',
        'vehicle-btn': 'vehicle-popup',
        'storage-btn': 'storage-popup',
        'energy-btn': 'energy-popup'
    };

    Object.keys(popupMap).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        const popup = document.getElementById(popupMap[buttonId]);

        if (button && popup) {
            button.addEventListener('click', () => {
                popup.classList.remove('hidden'); // 显示弹窗
            });
        }
    });

    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            if (popup) {
                popup.classList.add('hidden'); // 隐藏弹窗
            }
        });
    });
});



function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    if (dateTimeElement) {
        const now = new Date();

        // 获取日、月、年
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始
        const year = now.getFullYear();

        // 获取星期几
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = daysOfWeek[now.getDay()];

        // 格式化时间
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        // 更新日期时间格式
        const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} | ${dayOfWeek}`;
        dateTimeElement.textContent = formattedDateTime;
    }
}

// 每秒更新一次时间
setInterval(updateDateTime, 1000);
updateDateTime(); // 页面加载时立即调用




