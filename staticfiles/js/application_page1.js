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

// 定义分区数据
const zones = [
    {
        id: 'processing-zone',
        name: '管理区',
        top: '35%',
        left: '50%',
        icon: '/static/images/favicon.png', // 图标路径
    },
    {
        id: 'storage-zone',
        name: '存储区',
        top: '35%',
        left: '25%',
        icon: '/static/images/favicon.png',
    },
    {
        id: 'exploration-zone',
        name: '生活区',
        top: '30%',
        left: '65%',
        icon: '/static/images/favicon.png',
    },
    {
        id: 'management-zone',
        name: '开采区',
        top: '20%',
        left: '25%',
        icon: '/static/images/favicon.png',
    },
    {
        id: 'living-zone',
        name: '加工区',
        top: '50%',
        left: '25%',
        icon: '/static/images/favicon.png', // 自定义图标
    },
];

// 动态添加分区标签
zones.forEach(zone => {
    // 创建分区容器
    const zoneElement = document.createElement('div');
    zoneElement.classList.add('zone-label');
    zoneElement.id = zone.id;
    zoneElement.style.top = zone.top;
    zoneElement.style.left = zone.left;

    // 创建图标
    const iconElement = document.createElement('img');
    iconElement.src = zone.icon;
    iconElement.alt = zone.name;

    // 创建文字标签
    const nameElement = document.createElement('span');
    nameElement.innerText = zone.name;

    // 将图标和文字添加到分区容器
    zoneElement.appendChild(iconElement);
    zoneElement.appendChild(nameElement);

    // 将分区容器添加到地图容器
    mapContainer.appendChild(zoneElement);
});

// 分区交互效果
document.querySelectorAll('.zone-label').forEach(zone => {
    zone.addEventListener('mouseover', () => {
        console.log(`鼠标悬停在 ${zone.id}`); // 调试信息
        zone.style.transform = 'scale(1.1)'; // 放大效果
    });

    zone.addEventListener('mouseout', () => {
        zone.style.transform = 'scale(1)'; // 恢复原始大小
    });

    zone.addEventListener('click', () => {
        alert(`${zone.querySelector('span').innerText} 被点击了！`);
    });
});


// 动态加载人员信息
function loadPersonnelData() {
    console.log('Attempting to fetch /api/personnel/');
    fetch('/api/personnel/')
        .then(response => {
            console.log('API Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Personnel Data:', data);
            const personnelList = document.getElementById('personnelList');

            // 检查 personnelList 是否存在
            if (!personnelList) {
                console.error('Error: Element with id "personnelList" not found');
                return;
            }

            personnelList.innerHTML = ''; // 清空内容
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.category}: ${item.count}`;
                personnelList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading personnel data:', error));
}


// 页面加载时调用
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');
    loadPersonnelData();
});
