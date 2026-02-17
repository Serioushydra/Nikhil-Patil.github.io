document.addEventListener("DOMContentLoaded", function () {
const canvas = document.getElementById("radialSkills");

if (!canvas) {
    console.error("Canvas not found");
    return;
}

new Chart(canvas, {
    type: "doughnut",
    data: {
    labels: [
        "Programming",
        "ML / AI Libraries",
        "Data Visualization",
        "Big Data",
        "Cloud Platforms",
        "Databases",
        "Analytics & Modeling"
    ],
    datasets: [{
        data: [95, 90, 88, 85, 82, 80, 92],
        backgroundColor: [
        "#145A32",
        "#1E8449",
        "#27AE60",
        "#52BE80",
        "#F5B041",
        "#EB984E",
        "#C0392B"
        ],
        borderWidth: 2,
        hoverOffset: 10
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "55%",
    plugins: {
        legend: {
        position: "right"
        },
        tooltip: {
        callbacks: {
            label: ctx => `${ctx.label}: ${ctx.raw}%`
        }
        }
    }
    }
});
});
