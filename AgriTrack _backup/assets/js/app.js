// =====================================
// AGRITRACK JAVASCRIPT
// =====================================


// =====================================
// GLOBAL VARIABLES
// =====================================

let pumpOn = true;


// =====================================
// CROP DATA
// =====================================

const cropData = {

    tomato: {
        sowingDate: "10 June 2026",
        days: 65,
        harvest: "20 August 2026",
        duration: "70-80 days",

        stage: "Flowering",
        stageNumber: "Stage 3",
        progress: 65,

        health: "Healthy",
        healthMessage: "Crop is growing normally.",

        temperature: "20-30°C",
        moisture: "60-70%",
        humidity: "60-70%",
        sunlight: "6-8 hours",

        irrigation: "Moderate",
        irrigationMessage: "Irrigate when soil moisture decreases.",

        fertilizer: "NPK Fertilizer",
        fertilizerMessage: "Apply fertilizer according to growth stage.",

        weather: "Suitable",
        weatherMessage: "Current weather is suitable for tomato."
    },


    potato: {
        sowingDate: "15 June 2026",
        days: 55,
        harvest: "25 August 2026",
        duration: "80-100 days",

        stage: "Vegetative Growth",
        stageNumber: "Stage 2",
        progress: 55,

        health: "Healthy",
        healthMessage: "Potato crop is developing normally.",

        temperature: "15-25°C",
        moisture: "60-80%",
        humidity: "70-80%",
        sunlight: "6-8 hours",

        irrigation: "Regular",
        irrigationMessage: "Maintain consistent soil moisture.",

        fertilizer: "Potassium Rich",
        fertilizerMessage: "Potassium supports tuber development.",

        weather: "Suitable",
        weatherMessage: "Weather conditions are suitable."
    },


    rice: {
        sowingDate: "20 June 2026",
        days: 60,
        harvest: "20 September 2026",
        duration: "120-150 days",

        stage: "Tillering",
        stageNumber: "Stage 3",
        progress: 50,

        health: "Healthy",
        healthMessage: "Rice crop is developing normally.",

        temperature: "20-35°C",
        moisture: "70-90%",
        humidity: "70-90%",
        sunlight: "6-8 hours",

        irrigation: "High",
        irrigationMessage: "Rice requires regular water availability.",

        fertilizer: "Nitrogen Fertilizer",
        fertilizerMessage: "Nitrogen supports vegetative growth.",

        weather: "Good",
        weatherMessage: "Warm and humid weather is suitable."
    },


    wheat: {
        sowingDate: "10 November 2026",
        days: 70,
        harvest: "20 March 2027",
        duration: "120-150 days",

        stage: "Vegetative Growth",
        stageNumber: "Stage 2",
        progress: 50,

        health: "Healthy",
        healthMessage: "Wheat crop is growing normally.",

        temperature: "15-25°C",
        moisture: "50-70%",
        humidity: "50-70%",
        sunlight: "6-8 hours",

        irrigation: "Moderate",
        irrigationMessage: "Irrigate during critical growth stages.",

        fertilizer: "NPK Fertilizer",
        fertilizerMessage: "Balanced fertilizer supports growth.",

        weather: "Suitable",
        weatherMessage: "Cool weather is suitable for wheat."
    }

};
// =====================================
// UPDATE CROP INFORMATION
// =====================================

function updateCropInformation() {

    const cropSelect =
        document.getElementById("cropSelect");

    if (!cropSelect) {
        return;
    }

    const selectedCrop =
        cropSelect.value;

    const crop =
        cropData[selectedCrop];

    if (!crop) {
        return;
    }


    const sowingDate =
        document.getElementById("sowingDate");

    const daysSincePlanting =
        document.getElementById("daysSincePlanting");

    const harvestDate =
        document.getElementById("harvestDate");

    const cropDuration =
        document.getElementById("cropDuration");

    const growthStage =
        document.getElementById("growthStage");

    const stageNumber =
        document.getElementById("stageNumber");

    const growthProgress =
        document.getElementById("growthProgress");

    const cropProgressFill =
        document.getElementById("cropProgressFill");

    const plantHealth =
        document.getElementById("plantHealth");

    const healthMessage =
        document.getElementById("healthMessage");

    const idealTemperature =
        document.getElementById("idealTemperature");

    const idealMoisture =
        document.getElementById("idealMoisture");

    const idealHumidity =
        document.getElementById("idealHumidity");

    const idealSunlight =
        document.getElementById("idealSunlight");

    const irrigationRecommendation =
        document.getElementById("irrigationRecommendation");

    const irrigationMessage =
        document.getElementById("irrigationMessage");

    const fertilizerRecommendation =
        document.getElementById("fertilizerRecommendation");

    const fertilizerMessage =
        document.getElementById("fertilizerMessage");

    const weatherAdvice =
        document.getElementById("weatherAdvice");

    const weatherMessage =
        document.getElementById("weatherMessage");


    if (sowingDate)
        sowingDate.innerHTML = crop.sowingDate;

    if (daysSincePlanting)
        daysSincePlanting.innerHTML = crop.days;

    if (harvestDate)
        harvestDate.innerHTML = crop.harvest;

    if (cropDuration)
        cropDuration.innerHTML = crop.duration;

    if (growthStage)
        growthStage.innerHTML = crop.stage;

    if (stageNumber)
        stageNumber.innerHTML = crop.stageNumber;

    if (growthProgress)
        growthProgress.innerHTML =
            crop.progress + "%";

    if (cropProgressFill)
        cropProgressFill.style.width =
            crop.progress + "%";

    if (plantHealth)
        plantHealth.innerHTML = crop.health;

    if (healthMessage)
        healthMessage.innerHTML =
            crop.healthMessage;

    if (idealTemperature)
        idealTemperature.innerHTML =
            crop.temperature;

    if (idealMoisture)
        idealMoisture.innerHTML =
            crop.moisture;

    if (idealHumidity)
        idealHumidity.innerHTML =
            crop.humidity;

    if (idealSunlight)
        idealSunlight.innerHTML =
            crop.sunlight;

    if (irrigationRecommendation)
        irrigationRecommendation.innerHTML =
            crop.irrigation;

    if (irrigationMessage)
        irrigationMessage.innerHTML =
            crop.irrigationMessage;

    if (fertilizerRecommendation)
        fertilizerRecommendation.innerHTML =
            crop.fertilizer;

    if (fertilizerMessage)
        fertilizerMessage.innerHTML =
            crop.fertilizerMessage;

    if (weatherAdvice)
        weatherAdvice.innerHTML =
            crop.weather;

    if (weatherMessage)
        weatherMessage.innerHTML =
            crop.weatherMessage;


    // Update Dashboard Crop
    const dashboardCrop =
        document.getElementById("dashboardCrop");

    const dashboardGrowthStage =
        document.getElementById(
            "dashboardGrowthStage"
        );


    if (dashboardCrop) {

        dashboardCrop.innerHTML =
            selectedCrop.charAt(0).toUpperCase() +
            selectedCrop.slice(1);

    }


    if (dashboardGrowthStage) {

        dashboardGrowthStage.innerHTML =
            crop.stage;

    }


    // Save selected crop
    localStorage.setItem(
        "selectedCrop",
        selectedCrop
    );
}


// =====================================
// CROP DROPDOWN EVENT
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cropSelect =
            document.getElementById("cropSelect");

        if (cropSelect) {

            cropSelect.addEventListener(
                "change",
                updateCropInformation
            );

            updateCropInformation();

        }

    }
);
// =====================================
// SIMULATED SENSOR DATA
// =====================================

let moisture = 65;
let temperature = 28;
let humidity = 70;


// =====================================
// GENERATE RANDOM SENSOR VALUES
// =====================================

function generateSensorData() {

    // Random soil moisture: 40–80%
    moisture =
        Math.floor(Math.random() * 41) + 40;


    // Random temperature: 20–35°C
    temperature =
        Math.floor(Math.random() * 16) + 20;


    // Random humidity: 50–85%
    humidity =
        Math.floor(Math.random() * 36) + 50;


    updateSensorDisplay();
}


// =====================================
// UPDATE SOIL MOISTURE
// =====================================

function updateSensorDisplay() {

    const moistureValue =
        document.getElementById("moistureValue");

    const progressValue =
        document.getElementById("progressValue");

    const progressCircle =
        document.getElementById("progressCircle");

    const moistureStatus =
        document.getElementById("moistureStatus");


    if (moistureValue) {

        moistureValue.innerHTML =
            moisture + "%";

    }


    if (progressValue) {

        progressValue.innerHTML =
            moisture + "%";

    }


    if (progressCircle) {

        progressCircle.style.background =
            `conic-gradient(
                #4caf50 ${moisture}%,
                #ddd 0%
            )`;

    }


    if (moistureStatus) {

        if (moisture < 40) {

            moistureStatus.innerHTML =
                "Low";

        } else if (moisture > 80) {

            moistureStatus.innerHTML =
                "High";

        } else {

            moistureStatus.innerHTML =
                "Normal";

        }

    }


    // =====================================
    // UPDATE TEMPERATURE
    // =====================================

    const temperatureValue =
        document.getElementById("temperatureValue");

    const temperatureStatus =
        document.getElementById("temperatureStatus");

    const temperatureProgress =
        document.getElementById("temperatureProgress");


    if (temperatureValue) {

        temperatureValue.innerHTML =
            temperature + "°C";

    }


    if (temperatureStatus) {

        if (temperature > 32) {

            temperatureStatus.innerHTML =
                "High";

        } else if (temperature < 20) {

            temperatureStatus.innerHTML =
                "Low";

        } else {

            temperatureStatus.innerHTML =
                "Suitable for Crop";

        }

    }


    if (temperatureProgress) {

        let progress =
            ((temperature - 15) / 25) * 100;

        progress =
            Math.max(
                0,
                Math.min(
                    100,
                    progress
                )
            );

        temperatureProgress.style.width =
            progress + "%";

    }


    // =====================================
    // UPDATE HUMIDITY
    // =====================================

    const humidityValue =
        document.getElementById("humidityValue");

    const humidityStatus =
        document.getElementById("humidityStatus");


    if (humidityValue) {

        humidityValue.innerHTML =
            humidity + "%";

    }


    if (humidityStatus) {

        if (humidity < 40) {

            humidityStatus.innerHTML =
                "Low";

        } else if (humidity > 80) {

            humidityStatus.innerHTML =
                "High";

        } else {

            humidityStatus.innerHTML =
                "Good";

        }

    }


    // =====================================
    // LIVE WEATHER CARD
    // =====================================

    const weatherTemperature =
        document.getElementById(
            "weatherTemperature"
        );

    const weatherHumidity =
        document.getElementById(
            "weatherHumidity"
        );


    if (weatherTemperature) {

        weatherTemperature.innerHTML =
            temperature;

    }


    if (weatherHumidity) {

        weatherHumidity.innerHTML =
            humidity;

    }


    // =====================================
    // LAST UPDATED TIME
    // =====================================

    const lastUpdated =
        document.getElementById(
            "lastUpdated"
        );


    if (lastUpdated) {

        const now =
            new Date();

        lastUpdated.innerHTML =
            "Last Updated: " +
            now.toLocaleTimeString();

    }

}


// =====================================
// START SIMULATED SENSOR UPDATES
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        generateSensorData();

        setInterval(
            generateSensorData,
            3000
        );

    }
);
// =====================================
// WEATHER & RAIN FORECAST
// =====================================

function updateWeatherForecast() {

    const weatherForecast =
        document.getElementById("weatherForecast");

    const weatherStatus =
        document.getElementById("weatherStatus");


    // Generate random rain probability: 10–90%
    const rainChance =
        Math.floor(Math.random() * 81) + 10;


    // =====================================
    // WEATHER CONDITION
    // =====================================

    let weatherCondition;


    if (rainChance >= 70) {

        weatherCondition =
            "🌧️ Rainy";

    } else if (rainChance >= 40) {

        weatherCondition =
            "🌦️ Partly Cloudy";

    } else {

        weatherCondition =
            "☀️ Sunny";

    }


    // =====================================
    // IRRIGATION ADVICE
    // =====================================

    let weatherAdvice;


    if (rainChance >= 70) {

        weatherAdvice =
            "Reduce Irrigation";

    } else if (rainChance >= 40) {

        weatherAdvice =
            "Monitor Weather";

    } else {

        weatherAdvice =
            "Good for Irrigation";

    }


    // =====================================
    // UPDATE FORECAST
    // =====================================

    if (weatherForecast) {

        weatherForecast.innerHTML =
            weatherCondition;

    }


    // =====================================
    // UPDATE WEATHER ADVICE
    // =====================================

    if (weatherStatus) {

        weatherStatus.innerHTML =
            weatherAdvice;

    }


    // =====================================
    // DASHBOARD RAIN CHANCE
    // =====================================

    const dashboardRain =
        document.getElementById(
            "dashboardRain"
        );


    if (dashboardRain) {

        dashboardRain.innerHTML =
            rainChance + "%";

    }

    // =====================================
// SMART FARMING TIPS
// =====================================

const cropCareTip =
    document.getElementById("cropCareTip");

const irrigationTip =
    document.getElementById("irrigationTip");

const fertilizerTip =
    document.getElementById("fertilizerTip");

const weatherAlert =
    document.getElementById("weatherAlert");


// Crop Care Tip

if (cropCareTip) {

    if (rainChance >= 70) {

        cropCareTip.innerHTML =
            "🌧️ Protect crops from excess rain and waterlogging.";

    } else if (rainChance >= 40) {

        cropCareTip.innerHTML =
            "🌦️ Monitor crops regularly for moisture-related problems.";

    } else {

        cropCareTip.innerHTML =
            "☀️ Check crops regularly and maintain proper irrigation.";

    }

}


// Irrigation Tip

if (irrigationTip) {

    if (rainChance >= 70) {

        irrigationTip.innerHTML =
            "💧 Reduce or postpone irrigation because rain is likely.";

    } else if (rainChance >= 40) {

        irrigationTip.innerHTML =
            "💧 Check soil moisture before irrigating.";

    } else {

        irrigationTip.innerHTML =
            "💧 Irrigation may be required. Monitor soil moisture.";

    }

}


// Fertilizer Tip

if (fertilizerTip) {

    if (rainChance >= 70) {

        fertilizerTip.innerHTML =
            "🧪 Avoid applying fertilizer before heavy rainfall.";

    } else {

        fertilizerTip.innerHTML =
            "🧪 Apply fertilizer according to the crop growth stage.";

    }

}


// Weather Alert

if (weatherAlert) {

    if (rainChance >= 70) {

        weatherAlert.innerHTML =
            "⚠️ High rain probability. Take precautions against waterlogging.";

    } else if (rainChance >= 40) {

        weatherAlert.innerHTML =
            "🌦️ Moderate rain probability. Monitor weather conditions.";

    } else {

        weatherAlert.innerHTML =
            "✅ Low rain probability. Normal farming activities can continue.";

    }

}
}


// =====================================
// START WEATHER UPDATES
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateWeatherForecast();

        setInterval(
            updateWeatherForecast,
            5000
        );

    }
);
// =====================================
// IRRIGATION PUMP
// =====================================

function togglePump() {

    const pumpStatus =
        document.getElementById("pumpStatus");

    const pumpButton =
        document.getElementById("pumpButton");


    // Change pump state
    pumpOn = !pumpOn;


    if (pumpOn) {

        if (pumpStatus) {

            pumpStatus.innerHTML =
                "ON";

        }


        if (pumpButton) {

            pumpButton.innerHTML =
                "Turn OFF";

        }

    } else {

        if (pumpStatus) {

            pumpStatus.innerHTML =
                "OFF";

        }


        if (pumpButton) {

            pumpButton.innerHTML =
                "Turn ON";

        }

    }


    // Update Smart Alerts
    updatePumpAlert();
}


// =====================================
// UPDATE PUMP ALERT
// =====================================

function updatePumpAlert() {

    const alerts =
        document.getElementById("alerts");


    if (!alerts) {
        return;
    }


    // Find existing pump alert
    const alertItems =
        alerts.querySelectorAll("li");


    alertItems.forEach(function (item) {

        if (
            item.innerHTML.includes(
                "Irrigation Pump"
            )
        ) {

            if (pumpOn) {

                item.innerHTML =
                    "🚿 Irrigation Pump is ON";

            } else {

                item.innerHTML =
                    "🚿 Irrigation Pump is OFF";

            }

        }

    });

}
// =====================================
// IRRIGATION SCHEDULER
// =====================================

function scheduleIrrigation() {

    const crop =
        document.getElementById(
            "irrigationCrop"
        );

    const date =
        document.getElementById(
            "irrigationDate"
        );

    const time =
        document.getElementById(
            "irrigationTime"
        );

    const duration =
        document.getElementById(
            "irrigationDuration"
        );

    const mode =
        document.getElementById(
            "irrigationMode"
        );


    // Check that all elements exist
    if (
        !crop ||
        !date ||
        !time ||
        !duration ||
        !mode
    ) {

        alert(
            "Irrigation form elements not found."
        );

        return;
    }


    // Check required fields
    if (
        !date.value ||
        !time.value ||
        !duration.value
    ) {

        alert(
            "Please fill all irrigation details."
        );

        return;
    }


    // Create irrigation data
    const irrigationData = {

        crop: crop.value,

        date: date.value,

        time: time.value,

        duration: duration.value,

        mode: mode.value

    };


    // Get previously saved schedules
    let schedules =
        JSON.parse(
            localStorage.getItem(
                "irrigationSchedules"
            )
        ) || [];


    // Add new schedule
    schedules.push(
        irrigationData
    );


    // Save schedules
    localStorage.setItem(
        "irrigationSchedules",
        JSON.stringify(
            schedules
        )
    );


    alert(
        "Irrigation scheduled successfully! 💧"
    );


    // Display schedules
    displayIrrigationSchedules();


    // Update dashboard
    updateDashboardIrrigation();

}


// =====================================
// DISPLAY IRRIGATION SCHEDULES
// =====================================

function displayIrrigationSchedules() {

    const scheduleList =
    document.getElementById(
        "irrigationList"
    );


    if (!scheduleList) {
        return;
    }


    let schedules =
        JSON.parse(
            localStorage.getItem(
                "irrigationSchedules"
            )
        ) || [];


    // Clear old list
    scheduleList.innerHTML = "";


    if (schedules.length === 0) {

        scheduleList.innerHTML =
            "<p>No irrigation schedules yet.</p>";

        return;
    }


    schedules.forEach(
        function (schedule, index) {

            const scheduleCard =
                document.createElement(
                    "div"
                );


            scheduleCard.className =
                "card";


            scheduleCard.innerHTML = `

                <h3>💧 Irrigation Schedule</h3>

                <p>
                    🌱 Crop:
                    ${schedule.crop}
                </p>

                <p>
                    📅 Date:
                    ${schedule.date}
                </p>

                <p>
                    ⏰ Time:
                    ${schedule.time}
                </p>

                <p>
                    ⏱ Duration:
                    ${schedule.duration} minutes
                </p>

                <p>
                    ⚙ Mode:
                    ${schedule.mode}
                </p>

                <button
                    onclick="deleteIrrigation(${index})"
                    class="pump-btn">
                    Delete
                </button>

            `;


            scheduleList.appendChild(
                scheduleCard
            );

        }
    );

}


// =====================================
// DELETE IRRIGATION SCHEDULE
// =====================================

function deleteIrrigation(index) {

    let schedules =
        JSON.parse(
            localStorage.getItem(
                "irrigationSchedules"
            )
        ) || [];


    schedules.splice(
        index,
        1
    );


    localStorage.setItem(
        "irrigationSchedules",
        JSON.stringify(
            schedules
        )
    );


    displayIrrigationSchedules();


    updateDashboardIrrigation();

}
// =====================================
// DASHBOARD IRRIGATION INFORMATION
// =====================================

function updateDashboardIrrigation() {

    const nextIrrigation =
        document.getElementById(
            "nextIrrigation"
        );

    const cropDashboard =
        document.getElementById(
            "irrigationCropDashboard"
        );

    const durationDashboard =
        document.getElementById(
            "irrigationDurationDashboard"
        );

    const modeDashboard =
        document.getElementById(
            "irrigationModeDashboard"
        );


    // If dashboard elements don't exist,
    // do nothing
    if (!nextIrrigation) {
        return;
    }


    // Get saved schedules
    let schedules =
        JSON.parse(
            localStorage.getItem(
                "irrigationSchedules"
            )
        ) || [];


    // No schedule available
    if (schedules.length === 0) {

        nextIrrigation.innerHTML =
            "Not Scheduled";

        cropDashboard.innerHTML =
            "-";

        durationDashboard.innerHTML =
            "-";

        modeDashboard.innerHTML =
            "-";

        return;
    }


    // Get the latest schedule
    const schedule =
        schedules[
            schedules.length - 1
        ];


    // Display schedule on dashboard
    nextIrrigation.innerHTML =
        schedule.date +
        " " +
        schedule.time;


    cropDashboard.innerHTML =
        schedule.crop;


    durationDashboard.innerHTML =
        schedule.duration +
        " minutes";


    modeDashboard.innerHTML =
        schedule.mode;

}


// =====================================
// LOAD SAVED IRRIGATION DATA
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayIrrigationSchedules();

        updateDashboardIrrigation();

    }
);
// =====================================
// CHART DATA
// =====================================

let moistureChart = null;
let temperatureChart = null;

let moistureHistory = [];
let temperatureHistory = [];
let timeLabels = [];


// =====================================
// UPDATE CHARTS
// =====================================

function updateCharts() {

    const moistureCanvas =
        document.getElementById("moistureChart");

    const temperatureCanvas =
        document.getElementById("temperatureChart");


    // If charts are not on this page
    if (
        !moistureCanvas ||
        !temperatureCanvas
    ) {
        return;
    }


    // Create current time
    const now =
        new Date();

    const time =
        now.toLocaleTimeString();


    // Store values
    timeLabels.push(time);

    moistureHistory.push(moisture);

    temperatureHistory.push(temperature);


    // Keep only the latest 10 values
    if (timeLabels.length > 10) {

        timeLabels.shift();

        moistureHistory.shift();

        temperatureHistory.shift();

    }


    // =====================================
    // SOIL MOISTURE CHART
    // =====================================

    if (!moistureChart) {

        moistureChart =
            new Chart(
                moistureCanvas,
                {
                    type: "line",

                    data: {

                        labels:
                            timeLabels,

                        datasets: [

                            {
                                label:
                                    "Soil Moisture (%)",

                                data:
                                    moistureHistory,

                                borderWidth: 2,

                                tension: 0.3

                            }

                        ]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio:
                            false,

                        scales: {

                            y: {

                                beginAtZero:
                                    true,

                                max: 100

                            }

                        }

                    }

                }
            );

    } else {

        moistureChart.data.labels =
            timeLabels;

        moistureChart.data.datasets[0].data =
            moistureHistory;

        moistureChart.update();

    }


    // =====================================
    // TEMPERATURE CHART
    // =====================================

    if (!temperatureChart) {

        temperatureChart =
            new Chart(
                temperatureCanvas,
                {
                    type: "line",

                    data: {

                        labels:
                            timeLabels,

                        datasets: [

                            {
                                label:
                                    "Temperature (°C)",

                                data:
                                    temperatureHistory,

                                borderWidth: 2,

                                tension: 0.3

                            }

                        ]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio:
                            false,

                        scales: {

                            y: {

                                beginAtZero:
                                    false

                            }

                        }

                    }

                }
            );

    } else {

        temperatureChart.data.labels =
            timeLabels;

        temperatureChart.data.datasets[0].data =
            temperatureHistory;

        temperatureChart.update();

    }

}


// =====================================
// START CHART UPDATES
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Wait for Chart.js to load
        if (typeof Chart !== "undefined") {

            updateCharts();

            setInterval(
                updateCharts,
                3000
            );

        }

    }
);
// =====================================
// SMART ALERTS
// =====================================
function updateSmartAlerts() {

    const alerts =
        document.getElementById("alerts");

    if (!alerts) {
        return;
    }

    alerts.innerHTML = "";

    const weatherData =
        JSON.parse(
            localStorage.getItem("weatherData")
        );

    if (!weatherData) {

        const alertItem =
            document.createElement("li");

        alertItem.innerHTML =
            "🌦️ Please update weather data.";

        alerts.appendChild(alertItem);

        return;
    }

    const rain =
        Number(weatherData.rain);

    let message = "";

    if (rain >= 70) {

        message =
            "🌧️ High rain probability - Reduce or postpone irrigation.";

    } else if (rain >= 40) {

        message =
            "🌦️ Moderate rain probability - Monitor before irrigation.";

    } else {

        message =
            "💧 Low rain probability - Irrigation may be required.";

    }

    const alertItem =
        document.createElement("li");

    alertItem.innerHTML = message;

    alerts.appendChild(alertItem);
}



// =====================================
// UPDATE ALERTS WITH SENSOR DATA
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateSmartAlerts();


        setInterval(
            updateSmartAlerts,
            3000
        );

    }
);
// =====================================
// DASHBOARD DATE & TIME
// =====================================

function updateDateTime() {

    const dateTime =
        document.getElementById("dateTime");

    if (!dateTime) {
        return;
    }

    const now =
        new Date();

    dateTime.innerHTML =
        now.toLocaleString();

}


// =====================================
// UPDATE DATE & TIME
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDateTime();

        setInterval(
            updateDateTime,
            1000
        );

    }
);


// =====================================
// SCROLL TO DASHBOARD
// =====================================

function scrollToDashboard() {

    const dashboard =
        document.getElementById("dashboard");

    if (!dashboard) {
        return;
    }

    dashboard.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================
// LOAD SAVED CROP
// =====================================

function loadSavedCrop() {

    const cropSelect =
        document.getElementById(
            "cropSelect"
        );

    const savedCrop =
        localStorage.getItem(
            "selectedCrop"
        );

    if (
        cropSelect &&
        savedCrop &&
        cropSelect.querySelector(
            `option[value="${savedCrop}"]`
        )
    ) {

        cropSelect.value =
            savedCrop;

        updateCropInformation();

    }

}


// =====================================
// INITIALIZE AGRITRACK
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSavedCrop();

        updateDashboardIrrigation();

        displayIrrigationSchedules();

        updateSensorDisplay();

    }
);
// =====================================
// AGRITRACK FINAL INITIALIZATION
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Update crop information if available
        if (
            document.getElementById("cropSelect")
        ) {

            updateCropInformation();

        }


        // Update dashboard irrigation
        if (
            document.getElementById(
                "nextIrrigation"
            )
        ) {

            updateDashboardIrrigation();

        }


        // Display irrigation schedules
        if (
            document.getElementById(
                "irrigationList"
            )
        ) {

            displayIrrigationSchedules();

        }


        // Update sensor display
        updateSensorDisplay();


        // Update weather
        updateWeatherForecast();


        // Update alerts
        updateSmartAlerts();

    }
);
// =====================================
// CROP CALENDAR
// =====================================

const cropCalendarData = {

    tomato: {
        name: "Tomato",
        sowing: "10 June 2026",
        duration: "70-80 days",
        harvest: "20 August 2026",

        stages: [
            "🌱 Seed Germination",
            "🌿 Vegetative Growth",
            "🌼 Flowering",
            "🍅 Fruit Development",
            "🌾 Harvest"
        ],

        activities: [
            "💧 Maintain proper irrigation",
            "🌱 Apply fertilizer during growth",
            "🌿 Monitor plant health",
            "🐛 Check for pests",
            "🍅 Monitor fruit development"
        ]
    },


    potato: {
        name: "Potato",
        sowing: "15 June 2026",
        duration: "80-100 days",
        harvest: "25 August 2026",

        stages: [
            "🌱 Sprouting",
            "🌿 Vegetative Growth",
            "🌼 Tuber Formation",
            "🥔 Tuber Development",
            "🌾 Harvest"
        ],

        activities: [
            "💧 Maintain soil moisture",
            "🌱 Apply balanced fertilizer",
            "🌿 Monitor plant growth",
            "🐛 Check for pests",
            "🥔 Monitor tuber development"
        ]
    },


    rice: {
        name: "Rice",
        sowing: "20 June 2026",
        duration: "120-150 days",
        harvest: "20 September 2026",

        stages: [
            "🌱 Germination",
            "🌿 Seedling Growth",
            "🌾 Tillering",
            "🌾 Flowering",
            "🌾 Grain Filling",
            "🌾 Harvest"
        ],

        activities: [
            "💧 Maintain adequate water",
            "🌱 Apply nitrogen fertilizer",
            "🌿 Monitor weeds",
            "🐛 Check for pests",
            "🌾 Monitor grain development"
        ]
    },


    wheat: {
        name: "Wheat",
        sowing: "10 November 2026",
        duration: "120-150 days",
        harvest: "20 March 2027",

        stages: [
            "🌱 Germination",
            "🌿 Vegetative Growth",
            "🌾 Tillering",
            "🌼 Flowering",
            "🌾 Grain Development",
            "🌾 Harvest"
        ],

        activities: [
            "💧 Irrigate during critical stages",
            "🌱 Apply NPK fertilizer",
            "🌿 Control weeds",
            "🐛 Monitor pests",
            "🌾 Check grain development"
        ]
    }

};


// =====================================
// UPDATE CROP CALENDAR
// =====================================

function updateCropCalendar() {

    const cropSelect =
        document.getElementById(
            "cropCalendarSelect"
        );


    if (!cropSelect) {
        return;
    }


    const selectedCrop =
        cropSelect.value;


    const crop =
        cropCalendarData[selectedCrop];


    const calendarCrop =
        document.getElementById(
            "calendarCrop"
        );

    const calendarSowing =
        document.getElementById(
            "calendarSowing"
        );

    const calendarDuration =
        document.getElementById(
            "calendarDuration"
        );

    const calendarHarvest =
        document.getElementById(
            "calendarHarvest"
        );

    const growthStages =
        document.getElementById(
            "growthStages"
        );

    const farmingActivities =
        document.getElementById(
            "farmingActivities"
        );


    // No crop selected
    if (!crop) {

        if (calendarCrop)
            calendarCrop.innerHTML = "-";

        if (calendarSowing)
            calendarSowing.innerHTML = "-";

        if (calendarDuration)
            calendarDuration.innerHTML = "-";

        if (calendarHarvest)
            calendarHarvest.innerHTML = "-";


        if (growthStages) {

            growthStages.innerHTML =
                "<p>Select a crop to view its growth stages.</p>";

        }


        if (farmingActivities) {

            farmingActivities.innerHTML =
                "<li>Select a crop to view recommended activities.</li>";

        }

        return;
    }


    // =====================================
    // CROP INFORMATION
    // =====================================

    if (calendarCrop) {

        calendarCrop.innerHTML =
            crop.name;

    }


    if (calendarSowing) {

        calendarSowing.innerHTML =
            crop.sowing;

    }


    if (calendarDuration) {

        calendarDuration.innerHTML =
            crop.duration;

    }


    if (calendarHarvest) {

        calendarHarvest.innerHTML =
            crop.harvest;

    }
    // =====================================
// CROP PROGRESS
// =====================================

const calendarProgress =
    document.getElementById(
        "calendarProgress"
    );

const calendarProgressFill =
    document.getElementById(
        "calendarProgressFill"
    );

const calendarCurrentStage =
    document.getElementById(
        "calendarCurrentStage"
    );


// =====================================
// AUTOMATIC CROP PROGRESS
// =====================================

let progress = 0;

let currentStage = "-";

const sowingDate =
    new Date(crop.sowing);

const today =
    new Date();

const difference =
    today.getTime() -
    sowingDate.getTime();

const daysPassed =
    Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );
    // =====================================
// DAYS SINCE SOWING
// =====================================

const calendarDaysPassed =
    document.getElementById(
        "calendarDaysPassed"
    );


if (calendarDaysPassed) {

    if (daysPassed <= 0) {

        calendarDaysPassed.innerHTML =
            "0 days";

    } else {

        calendarDaysPassed.innerHTML =
            daysPassed + " days";

    }

}

const durationText =
    crop.duration.split("-")[0];

const cropDuration =
    parseInt(durationText);


if (daysPassed <= 0) {

    progress = 0;

} else {

    progress =
        Math.round(
            (daysPassed /
            cropDuration) * 100
        );

}


progress =
    Math.max(
        0,
        Math.min(
            100,
            progress
        )
    );


if (progress < 20) {

    currentStage =
        crop.stages[0];

} else if (progress < 40) {

    currentStage =
        crop.stages[1];

} else if (progress < 60) {

    currentStage =
        crop.stages[2];

} else if (progress < 80) {

    currentStage =
        crop.stages[
            Math.min(
                3,
                crop.stages.length - 1
            )
        ];

} else {

    currentStage =
        crop.stages[
            crop.stages.length - 1
        ];

}


if (calendarProgress) {

    calendarProgress.innerHTML =
        progress + "%";

}


if (calendarProgressFill) {

    calendarProgressFill.style.width =
        progress + "%";

}


if (calendarCurrentStage) {

    calendarCurrentStage.innerHTML =
        currentStage;

}
// Update percentage

if (calendarProgress) {

    calendarProgress.innerHTML =
        progress + "%";

}


// Update progress bar

if (calendarProgressFill) {

    calendarProgressFill.style.width =
        progress + "%";

}


// Update current stage

if (calendarCurrentStage) {

    calendarCurrentStage.innerHTML =
        currentStage;

}


    // =====================================
    // GROWTH STAGES
    // =====================================

    // =====================================
// GROWTH TIMELINE
// =====================================

const growthTimeline =
    document.getElementById(
        "growthTimeline"
    );


if (growthTimeline) {

    growthTimeline.innerHTML = "";


    crop.stages.forEach(
        function(stage, index) {

            const stageElement =
                document.createElement("div");


            stageElement.className =
    "growth-stage";


// Highlight current stage
if (
    stage === currentStage
) {

    stageElement.classList.add(
        "current-stage"
    );

}


            stageElement.innerHTML = `

                <div class="stage-number">
                    ${index + 1}
                </div>

                <div class="stage-content">

                    <h3>
                        ${stage}
                    </h3>

                    <p>
                        Growth Stage ${index + 1}
                    </p>

                </div>

            `;


            growthTimeline.appendChild(
                stageElement
            );

        }
    );

}

    // =====================================
    // FARMING ACTIVITIES
    // =====================================

    if (farmingActivities) {

        farmingActivities.innerHTML = "";


        crop.activities.forEach(
            function(activity) {

                const activityElement =
                    document.createElement("li");


                activityElement.innerHTML =
                    activity;


                farmingActivities.appendChild(
                    activityElement
                );

            }
        );

    }

}


// =====================================
// CROP CALENDAR DROPDOWN
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const cropSelect =
            document.getElementById(
                "cropCalendarSelect"
            );


        if (cropSelect) {

            cropSelect.addEventListener(
                "change",
                updateCropCalendar
            );


            updateCropCalendar();

        }

    }
);
// =====================================
// CROP CALENDAR REMINDERS
// =====================================

function updateCropReminders() {

    const cropSelect =
        document.getElementById(
            "cropCalendarSelect"
        );

    const cropReminders =
        document.getElementById(
            "cropReminders"
        );


    if (!cropSelect || !cropReminders) {
        return;
    }


    const selectedCrop =
        cropSelect.value;


    const crop =
        cropCalendarData[selectedCrop];


    if (!crop) {

        cropReminders.innerHTML =
            "<p>Select a crop to view reminders.</p>";

        return;
    }


    cropReminders.innerHTML = `

        <p>💧 Maintain proper irrigation</p>

        <p>🌱 Check fertilizer requirements</p>

        <p>🐛 Monitor crop for pests</p>

        <p>🌿 Check plant growth regularly</p>

        <p>🌾 Monitor crop maturity</p>

    `;
}


// =====================================
// CROP REMINDER EVENT
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cropSelect =
            document.getElementById(
                "cropCalendarSelect"
            );


        if (cropSelect) {

            cropSelect.addEventListener(
                "change",
                updateCropReminders
            );

            updateCropReminders();

        }

    }
);
// =====================================
// FARM EXPENSE TRACKER
// =====================================

function addExpense() {

    const category =
        document.getElementById(
            "expenseCategory"
        ).value;

    const amount =
        document.getElementById(
            "expenseAmount"
        ).value;

    const date =
        document.getElementById(
            "expenseDate"
        ).value;

    const description =
        document.getElementById(
            "expenseDescription"
        ).value;


    // Check required fields
    if (
        !category ||
        !amount ||
        !date
    ) {

        alert(
            "Please fill category, amount and date."
        );

        return;
    }


    // Create expense
    const expenseData = {

        category: category,

        amount: Number(amount),

        date: date,

        description:
            description || "No description"

    };


    // Get saved expenses
    let expenses =
        JSON.parse(
            localStorage.getItem(
                "farmExpenses"
            )
        ) || [];


    // Add new expense
    expenses.push(
        expenseData
    );


    // Save expenses
    localStorage.setItem(
        "farmExpenses",
        JSON.stringify(
            expenses
        )
    );


    // Success message
    const message =
        document.getElementById(
            "expenseMessage"
        );

    if (message) {

        message.innerHTML =
            "✅ Expense added successfully!";

    }


    // Clear form
    document.getElementById(
        "expenseAmount"
    ).value = "";

    document.getElementById(
        "expenseDate"
    ).value = "";

    document.getElementById(
        "expenseDescription"
    ).value = "";

    document.getElementById(
        "expenseCategory"
    ).value = "";


    // Update page
    displayExpenses();

}


// =====================================
// DISPLAY EXPENSES
// =====================================

function displayExpenses() {

    const expenseList =
        document.getElementById(
            "expenseList"
        );


    if (!expenseList) {
        return;
    }


    let expenses =
        JSON.parse(
            localStorage.getItem(
                "farmExpenses"
            )
        ) || [];


    expenseList.innerHTML = "";


    // No expenses
    if (expenses.length === 0) {

        expenseList.innerHTML = `
            <p id="noExpenses">
                No expenses added yet.
            </p>
        `;

        updateTotalExpense();

        return;
    }


    // Display each expense
    expenses.forEach(
        function(expense, index) {

            const expenseCard =
                document.createElement(
                    "div"
                );


            expenseCard.className =
                "card";


            expenseCard.innerHTML = `

                <h3>
                    ${expense.category}
                </h3>

                <p>
                    💰 Amount:
                    ₹${expense.amount}
                </p>

                <p>
                    📅 Date:
                    ${expense.date}
                </p>

                <p>
                    📝 Description:
                    ${expense.description}
                </p>

                <button
                    onclick="deleteExpense(${index})">

                    🗑 Delete

                </button>

            `;


            expenseList.appendChild(
                expenseCard
            );

        }
    );


    updateTotalExpense();

}


// =====================================
// TOTAL EXPENSE
// =====================================

function updateTotalExpense() {

    const totalExpense =
        document.getElementById(
            "totalExpense"
        );


    if (!totalExpense) {
        return;
    }


    let expenses =
        JSON.parse(
            localStorage.getItem(
                "farmExpenses"
            )
        ) || [];


    let total = 0;


    expenses.forEach(
        function(expense) {

            total +=
                Number(
                    expense.amount
                );

        }
    );


    totalExpense.innerHTML =
        "₹" + total;

}


// =====================================
// DELETE EXPENSE
// =====================================

function deleteExpense(index) {

    let expenses =
        JSON.parse(
            localStorage.getItem(
                "farmExpenses"
            )
        ) || [];


    expenses.splice(
        index,
        1
    );


    localStorage.setItem(
        "farmExpenses",
        JSON.stringify(
            expenses
        )
    );


    displayExpenses();

}


// =====================================
// LOAD EXPENSES
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayExpenses();

    }
);
// =====================================
// SEED RECOMMENDATION
// =====================================

function recommendSeeds() {

    const crop =
        document.getElementById("seedCrop").value;

    const soil =
        document.getElementById("soilType").value;

    const season =
        document.getElementById("seedSeason").value;

    const water =
        document.getElementById("waterAvailability").value;

    const result =
        document.getElementById("seedRecommendation");


    // Check all details

    if (!crop || !soil || !season || !water) {

        result.innerHTML = `
            <p>
                ⚠️ Please select all farm details.
            </p>
        `;

        return;
    }


    let seed = "";
    let variety = "";
    let reason = "";


    // =====================================
    // TOMATO
    // =====================================

    if (crop === "Tomato") {

        if (soil === "Loamy") {

            seed = "Arka Vikas";
            variety = "High-yield tomato variety";

        } else {

            seed = "Pusa Ruby";
            variety = "Suitable for different soil conditions";

        }

        reason =
            "Good growth and suitable for common Indian farming conditions.";

    }


    // =====================================
    // POTATO
    // =====================================

    else if (crop === "Potato") {

        if (soil === "Sandy" ||
            soil === "Loamy") {

            seed = "Kufri Jyoti";
            variety = "Popular potato variety";

        } else {

            seed = "Kufri Pukhraj";
            variety = "High-yield potato variety";

        }

        reason =
            "Suitable for good tuber development and commercial cultivation.";

    }


    // =====================================
    // RICE
    // =====================================

    else if (crop === "Rice") {

        if (water === "High") {

            seed = "Swarna";
            variety = "High-yield rice variety";

        } else {

            seed = "Sahbhagi Dhan";
            variety = "Drought-tolerant rice variety";

        }

        reason =
            "Selected according to water availability and growing conditions.";

    }


    // =====================================
    // WHEAT
    // =====================================

    else if (crop === "Wheat") {

        if (soil === "Black" ||
            soil === "Loamy") {

            seed = "HD 2967";
            variety = "High-yield wheat variety";

        } else {

            seed = "HD 3086";
            variety = "Improved wheat variety";

        }

        reason =
            "Suitable for good grain production under suitable soil conditions.";

    }


    // =====================================
    // DISPLAY RESULT
    // =====================================
// =====================================
// RECOMMENDATION SCORE
// =====================================

let score = 0;


// Soil match

if (
    (crop === "Tomato" && soil === "Loamy") ||
    (crop === "Potato" && (soil === "Loamy" || soil === "Sandy")) ||
    (crop === "Rice" && (soil === "Clay" || soil === "Loamy")) ||
    (crop === "Wheat" && (soil === "Black" || soil === "Loamy"))
) {

    score += 40;

} else {

    score += 20;

}


// Water match

if (
    (crop === "Rice" && water === "High") ||
    (crop === "Tomato" && water === "Medium") ||
    (crop === "Potato" && water === "Medium") ||
    (crop === "Wheat" && water === "Medium")
) {

    score += 30;

} else {

    score += 15;

}


// Season match

if (
    (crop === "Rice" && season === "Kharif") ||
    (crop === "Wheat" && season === "Rabi") ||
    (crop === "Tomato" && (season === "Kharif" || season === "Zaid")) ||
    (crop === "Potato" && season === "Rabi")
) {

    score += 30;

} else {

    score += 15;

}


// =====================================
// RECOMMENDATION LEVEL
// =====================================

let recommendationLevel;

if (score >= 85) {

    recommendationLevel =
        "🌟 Excellent Match";

} else if (score >= 65) {

    recommendationLevel =
        "👍 Good Match";

} else {

    recommendationLevel =
        "⚠️ Moderate Match";

}
    result.innerHTML = `

        <div class="seed-result">

            <h3>
                🌱 Recommended Seed
            </h3>
<p>
    <strong>Recommendation:</strong>
    ${recommendationLevel}
</p>

<p>
    <strong>Match Score:</strong>
    ${score}%
</p>
            <h2>
                ${seed}
            </h2>

            <p>
                <strong>Crop:</strong>
                ${crop}
            </p>

            <p>
                <strong>Variety:</strong>
                ${variety}
            </p>

            <p>
                <strong>Soil:</strong>
                ${soil}
            </p>

            <p>
                <strong>Season:</strong>
                ${season}
            </p>

            <p>
                <strong>Water:</strong>
                ${water}
            </p>

           <div class="seed-explanation">

    <h3>
        💡 Why this seed?
    </h3>

    <p>
        ${reason}
    </p>

    <p>
        This recommendation is based on your
        selected crop, soil type, season and
        water availability.
    </p>

</div>

        </div>

    `;
// =====================================
// SAVE LAST SEED RECOMMENDATION
// =====================================

const seedRecommendationData = {

    crop: crop,

    seed: seed,

    variety: variety,

    soil: soil,

    season: season,

    water: water,

    score: score,

    recommendation: recommendationLevel,

    reason: reason

};


localStorage.setItem(
    "lastSeedRecommendation",
    JSON.stringify(
        seedRecommendationData
    )
);
}
// =====================================
// DASHBOARD SEED RECOMMENDATION
// =====================================

function updateDashboardSeedRecommendation() {

    const dashboardSeed =
        document.getElementById(
            "dashboardSeedRecommendation"
        );

    if (!dashboardSeed) {
        return;
    }


    const savedRecommendation =
        JSON.parse(
            localStorage.getItem(
                "lastSeedRecommendation"
            )
        );


    if (!savedRecommendation) {

        dashboardSeed.innerHTML = `
            <p>
                No seed recommendation yet.
            </p>
        `;

        return;
    }


    dashboardSeed.innerHTML = `

        <h3>
            🌱 ${savedRecommendation.seed}
        </h3>

        <p>
            <strong>Crop:</strong>
            ${savedRecommendation.crop}
        </p>

        <p>
            <strong>Variety:</strong>
            ${savedRecommendation.variety}
        </p>

        <p>
            <strong>Match Score:</strong>
            ${savedRecommendation.score}%
        </p>

        <p>
            <strong>
                ${savedRecommendation.recommendation}
            </strong>
        </p>

    `;

}

function updateDashboardSmartCrop() {

    const dashboardSmartCrop =
        document.getElementById("dashboardSmartCrop");

    if (!dashboardSmartCrop) {
        return;
    }

    const savedCrop =
        JSON.parse(
            localStorage.getItem(
                "smartCropRecommendation"
            )
        );

    if (!savedCrop) {

        dashboardSmartCrop.innerHTML = `
            <p>
                No crop recommendation yet.
            </p>
        `;

        return;
    }

    dashboardSmartCrop.innerHTML = `
        <h3>
            🌱 ${savedCrop.crop}
        </h3>

        <p>
            <strong>Suitability:</strong>
            ${savedCrop.score}/100
        </p>
    `;
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardSmartCrop();

    }
);

// =====================================
// LOAD DASHBOARD SEED RECOMMENDATION
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboardSeedRecommendation();

    }
);
// =====================================
// ORGANIC FERTILIZER GUIDE
// SOIL REPORT INTEGRATION
// =====================================

function showFertilizerGuide() {

    const crop =
        document.getElementById(
            "fertilizerCrop"
        ).value;

    const result =
        document.getElementById(
            "fertilizerRecommendation"
        );


    // =====================================
    // CHECK CROP SELECTION
    // =====================================

    if (!crop) {

        result.innerHTML = `
            <p>
                ⚠️ Please select a crop first.
            </p>
        `;

        return;
    }


    // =====================================
    // BASIC CROP RECOMMENDATION
    // =====================================

    let fertilizer = "";
    let quantity = "";
    let timing = "";
    let benefits = "";


    // =====================================
    // TOMATO
    // =====================================

    if (crop === "Tomato") {

        fertilizer =
            "Well-decomposed Farmyard Manure (FYM) + Vermicompost";

        quantity =
            "FYM: 20–25 tonnes/ha; Vermicompost: 2–3 tonnes/ha";

        timing =
            "Apply FYM before planting and vermicompost around the root zone during crop growth.";

        benefits =
            "Improves soil structure, organic matter and nutrient availability.";

    }


    // =====================================
    // POTATO
    // =====================================

    else if (crop === "Potato") {

        fertilizer =
            "Farmyard Manure (FYM) + Vermicompost";

        quantity =
            "FYM: about 20 tonnes/ha; Vermicompost: 2–3 tonnes/ha";

        timing =
            "Apply well-decomposed manure before planting and vermicompost during crop growth.";

        benefits =
            "Improves soil fertility and supports healthy tuber development.";

    }


    // =====================================
    // RICE
    // =====================================

    else if (crop === "Rice") {

        fertilizer =
            "Farmyard Manure (FYM) + Compost";

        quantity =
            "Use well-decomposed organic manure according to soil condition and local recommendations.";

        timing =
            "Apply organic manure during field preparation before transplanting or sowing.";

        benefits =
            "Improves soil organic matter and supports nutrient availability.";

    }


    // =====================================
    // WHEAT
    // =====================================

    else if (crop === "Wheat") {

        fertilizer =
            "Farmyard Manure (FYM) + Vermicompost";

        quantity =
            "Use well-decomposed FYM and vermicompost according to soil condition and local recommendations.";

        timing =
            "Apply organic manure during field preparation before sowing.";

        benefits =
            "Improves soil structure and helps maintain soil fertility.";

    }


    // =====================================
    // READ SAVED SOIL REPORT
    // =====================================

    const savedSoil =
        JSON.parse(
            localStorage.getItem("soilData")
        );


    let soilReportHTML = "";
    let nutrientAdvice = [];


    // =====================================
    // NO SOIL REPORT
    // =====================================

    if (!savedSoil) {

        soilReportHTML = `
            <div class="soil-status">
                <p>
                    ℹ️ No soil report has been confirmed yet.
                </p>

                <p>
                    This recommendation is based on the
                    selected crop only.
                </p>
            </div>
        `;

    }


    // =====================================
    // SOIL REPORT AVAILABLE
    // =====================================

    else {

        const nitrogen =
            parseFloat(savedSoil.nitrogen);

        const phosphorus =
            parseFloat(savedSoil.phosphorus);

        const potassium =
            parseFloat(savedSoil.potassium);

        const pH =
            parseFloat(savedSoil.pH);


        // =====================================
        // NITROGEN STATUS
        // Soil Health Card teaching classification
        // =====================================

        let nitrogenStatus = "Not available";

        if (!isNaN(nitrogen)) {

            if (nitrogen < 280) {

                nitrogenStatus = "Low";

                nutrientAdvice.push(
                    "Nitrogen is low — the fertilizer plan should give attention to nitrogen nutrition."
                );

            } else if (nitrogen <= 560) {

                nitrogenStatus = "Medium";

            } else {

                nitrogenStatus = "High";

            }

        }


        // =====================================
        // PHOSPHORUS STATUS
        // =====================================

        let phosphorusStatus = "Not available";

        if (!isNaN(phosphorus)) {

            if (phosphorus < 10) {

                phosphorusStatus = "Low";

                nutrientAdvice.push(
                    "Phosphorus is low — the fertilizer plan should give attention to phosphorus nutrition."
                );

            } else if (phosphorus <= 25) {

                phosphorusStatus = "Medium";

            } else if (phosphorus <= 50) {

                phosphorusStatus = "High";

            } else {

                phosphorusStatus = "Very High";

            }

        }


        // =====================================
        // POTASSIUM STATUS
        // =====================================

        let potassiumStatus = "Not available";

        if (!isNaN(potassium)) {

            if (potassium < 120) {

                potassiumStatus = "Low";

                nutrientAdvice.push(
                    "Potassium is low — the fertilizer plan should give attention to potassium nutrition."
                );

            } else if (potassium <= 280) {

                potassiumStatus = "Medium";

            } else if (potassium <= 600) {

                potassiumStatus = "High";

            } else {

                potassiumStatus = "Very High";

            }

        }


        // =====================================
        // DISPLAY SOIL INFORMATION
        // =====================================

        soilReportHTML = `

            <div class="soil-status">

                <h3>
                    🧪 Soil Report Used
                </h3>

                <p>
                    <strong>Soil Type:</strong>
                    ${savedSoil.soilType || "Not available"}
                </p>

                <p>
                    <strong>pH:</strong>
                    ${savedSoil.pH || "Not available"}
                </p>

                <p>
                    <strong>Nitrogen:</strong>
                    ${savedSoil.nitrogen || "Not available"}
                    ${nitrogenStatus !== "Not available"
                        ? `(${nitrogenStatus})`
                        : ""}
                </p>

                <p>
                    <strong>Phosphorus:</strong>
                    ${savedSoil.phosphorus || "Not available"}
                    ${phosphorusStatus !== "Not available"
                        ? `(${phosphorusStatus})`
                        : ""}
                </p>

                <p>
                    <strong>Potassium:</strong>
                    ${savedSoil.potassium || "Not available"}
                    ${potassiumStatus !== "Not available"
                        ? `(${potassiumStatus})`
                        : ""}
                </p>

            </div>

        `;


        // =====================================
        // NUTRIENT ADVICE
        // =====================================

        if (nutrientAdvice.length > 0) {

            soilReportHTML += `

                <div class="soil-nutrient-advice">

                    <h3>
                        🌱 Soil-Based Advice
                    </h3>

                    ${nutrientAdvice.map(
                        function(advice) {

                            return `
                                <p>
                                    • ${advice}
                                </p>
                            `;

                        }
                    ).join("")}

                </div>

            `;

        } else {

            soilReportHTML += `

                <div class="soil-nutrient-advice">

                    <h3>
                        ✅ Soil Nutrient Status
                    </h3>

                    <p>
                        No low N, P or K value was detected
                        from the confirmed soil report.
                    </p>

                    <p>
                        Continue balanced, soil-test-based
                        nutrient management.
                    </p>

                </div>

            `;

        }

    }


    // =====================================
    // DISPLAY COMPLETE RESULT
    // =====================================

    result.innerHTML = `

        <div class="fertilizer-result">

            <h3>
                🌿 Recommended Organic Fertilizer
            </h3>

            <h2>
                ${fertilizer}
            </h2>

            <p>
                <strong>🌱 Crop:</strong>
                ${crop}
            </p>

            <p>
                <strong>⚖️ Suggested Quantity:</strong>
                ${quantity}
            </p>

            <p>
                <strong>📅 When to Apply:</strong>
                ${timing}
            </p>

            <p>
                <strong>💚 Benefits:</strong>
                ${benefits}
            </p>

            ${soilReportHTML}

        </div>

    `;


    // =====================================
    // SAVE FERTILIZER RESULT
    // =====================================

    const fertilizerData = {

        crop: crop,

        fertilizer: fertilizer,

        quantity: quantity,

        timing: timing,

        benefits: benefits,

        soilReportUsed:
            savedSoil ? true : false,

        soilType:
            savedSoil
                ? savedSoil.soilType
                : "",

        pH:
            savedSoil
                ? savedSoil.pH
                : "",

        nitrogen:
            savedSoil
                ? savedSoil.nitrogen
                : "",

        phosphorus:
            savedSoil
                ? savedSoil.phosphorus
                : "",

        potassium:
            savedSoil
                ? savedSoil.potassium
                : "",

        nutrientAdvice:
            nutrientAdvice

    };


    localStorage.setItem(
        "lastFertilizer",
        JSON.stringify(
            fertilizerData
        )
    );

}
// =====================================
// HARVEST YIELD CALCULATOR
// =====================================

function calculateHarvestYield() {

    const crop =
        document.getElementById(
            "harvestCrop"
        ).value;

    const area =
        Number(
            document.getElementById(
                "farmArea"
            ).value
        );

    const yieldPerAcre =
        Number(
            document.getElementById(
                "yieldPerAcre"
            ).value
        );

    const result =
        document.getElementById(
            "harvestResult"
        );


    // Check details

    if (!crop || !area || !yieldPerAcre) {

        result.innerHTML = `
            <p>
                ⚠️ Please enter all farm details.
            </p>
        `;

        return;
    }


    // Calculate total harvest

    const totalHarvest =
        area * yieldPerAcre;


    // Convert kg to tonnes

    const tonnes =
        totalHarvest / 1000;


    // Display result

    result.innerHTML = `

        <div class="harvest-result">

            <h3>
                🌾 Expected Harvest
            </h3>

            <h2>
                ${totalHarvest.toFixed(2)} kg
            </h2>

            <p>
                <strong>Crop:</strong>
                ${crop}
            </p>

            <p>
                <strong>Farm Area:</strong>
                ${area} acres
            </p>

            <p>
                <strong>Expected Yield:</strong>
                ${yieldPerAcre} kg/acre
            </p>

            <p>
                <strong>Estimated Harvest:</strong>
                ${tonnes.toFixed(2)} tonnes
            </p>

        </div>

    `;
    // =====================================
// SAVE HARVEST RESULT
// =====================================

const harvestData = {

    crop: crop,

    area: area,

    yieldPerAcre: yieldPerAcre,

    totalHarvest: totalHarvest,

    tonnes: tonnes

};

localStorage.setItem(
    "lastHarvest",
    JSON.stringify(harvestData)
);

}
// =====================================
// EQUIPMENT RENTAL SYSTEM
// =====================================

function calculateRental() {

    const equipment =
        document.getElementById(
            "equipmentType"
        ).value;

    const days =
        Number(
            document.getElementById(
                "rentalDays"
            ).value
        );

    const result =
        document.getElementById(
            "rentalResult"
        );


    // Check details

    if (!equipment || !days) {

        result.innerHTML = `
            <p>
                ⚠️ Please select equipment
                and enter rental duration.
            </p>
        `;

        return;
    }


    let rate = 0;


    // =====================================
    // RENTAL RATES
    // =====================================

    if (equipment === "Tractor") {

        rate = 2500;

    }

    else if (equipment === "Rotavator") {

        rate = 1800;

    }

    else if (equipment === "Cultivator") {

        rate = 1500;

    }

    else if (equipment === "Seed Drill") {

        rate = 2000;

    }

    else if (equipment === "Harvester") {

        rate = 5000;

    }

    else if (equipment === "Sprayer") {

        rate = 1000;

    }


    // Calculate total

    const totalCost =
        rate * days;


    // =====================================
    // DISPLAY RESULT
    // =====================================

    result.innerHTML = `

        <div class="rental-result">

            <h3>
                🚜 Rental Summary
            </h3>

            <h2>
                ₹${totalCost}
            </h2>

            <p>
                <strong>Equipment:</strong>
                ${equipment}
            </p>

            <p>
                <strong>Rental Duration:</strong>
                ${days} day(s)
            </p>

            <p>
                <strong>Rate:</strong>
                ₹${rate} per day
            </p>

            <p>
                <strong>Total Rental Cost:</strong>
                ₹${totalCost}
            </p>

        </div>

    `;

  // =====================================
// SAVE RENTAL RESULT
// =====================================

const rentalData = {

    equipment: equipment,

    days: days,

    rate: rate,

    totalCost: totalCost

};

localStorage.setItem(
    "lastRental",
    JSON.stringify(rentalData)
);  
}
// =====================================
// CROP ROTATION PLANNER
// =====================================

function planCropRotation() {

    const currentCrop =
        document.getElementById(
            "currentCrop"
        ).value;

    const result =
        document.getElementById(
            "rotationResult"
        );


    // Check crop selection

    if (!currentCrop) {

        result.innerHTML = `
            <p>
                ⚠️ Please select your current crop.
            </p>
        `;

        return;
    }


    let nextCrop = "";
    let reason = "";
    let benefit = "";


    // =====================================
    // ROTATION RECOMMENDATIONS
    // =====================================

    if (currentCrop === "Tomato") {

        nextCrop = "🌾 Wheat";

        reason =
            "Wheat belongs to a different crop group and can help break continuous tomato cultivation.";

        benefit =
            "Helps reduce the buildup of crop-specific pests and diseases.";

    }

    else if (currentCrop === "Potato") {

        nextCrop = "🌱 Legume Crop";

        reason =
            "A legume crop is a useful rotation choice after potato.";

        benefit =
            "Legumes can contribute nitrogen to the soil through biological nitrogen fixation.";

    }

    else if (currentCrop === "Rice") {

        nextCrop = "🌾 Wheat";

        reason =
            "Wheat can be grown as a following crop in suitable rice-based cropping systems.";

        benefit =
            "Provides crop diversity and can improve overall cropping-system management.";

    }

    else if (currentCrop === "Wheat") {

        nextCrop = "🌱 Legume Crop";

        reason =
            "A legume crop provides a different crop family after wheat.";

        benefit =
            "Can help improve soil nitrogen availability and break cereal crop cycles.";

    }


    // =====================================
    // DISPLAY RESULT
    // =====================================

    result.innerHTML = `

        <div class="rotation-result">

            <h3>
                🌱 Recommended Next Crop
            </h3>

            <h2>
                ${nextCrop}
            </h2>

            <p>
                <strong>Current Crop:</strong>
                ${currentCrop}
            </p>

            <p>
                <strong>Why this crop?</strong>
                ${reason}
            </p>

            <p>
                <strong>🌱 Soil Benefit:</strong>
                ${benefit}
            </p>

        </div>

    `;
   // =====================================
// SAVE CROP ROTATION RESULT
// =====================================

const rotationData = {

    currentCrop: currentCrop,

    nextCrop: nextCrop,

    reason: reason,

    benefit: benefit

};

localStorage.setItem(
    "lastCropRotation",
    JSON.stringify(rotationData)
); 

}
// =====================================
// DASHBOARD HARVEST RESULT
// =====================================

function updateDashboardHarvest() {

    const dashboardHarvest =
        document.getElementById("dashboardHarvest");

    if (!dashboardHarvest) {
        return;
    }

    const savedHarvest =
        JSON.parse(
            localStorage.getItem("lastHarvest")
        );

    if (!savedHarvest) {

        dashboardHarvest.innerHTML = `
            <p>
                No harvest calculated yet.
            </p>
        `;

        return;
    }

    dashboardHarvest.innerHTML = `

        <h3>
            🌾 ${savedHarvest.totalHarvest.toFixed(2)} kg
        </h3>

        <p>
            <strong>Crop:</strong>
            ${savedHarvest.crop}
        </p>

        <p>
            <strong>Area:</strong>
            ${savedHarvest.area} acres
        </p>

        <p>
            <strong>Estimated:</strong>
            ${savedHarvest.tonnes.toFixed(2)} tonnes
        </p>

    `;
}


// =====================================
// LOAD DASHBOARD HARVEST
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardHarvest();

    }
);
// =====================================
// DASHBOARD RENTAL RESULT
// =====================================

function updateDashboardRental() {

    const dashboardRental =
        document.getElementById("dashboardRental");

    if (!dashboardRental) {
        return;
    }

    const savedRental =
        JSON.parse(
            localStorage.getItem("lastRental")
        );

    if (!savedRental) {

        dashboardRental.innerHTML = `
            <p>
                No rental calculated yet.
            </p>
        `;

        return;
    }

    dashboardRental.innerHTML = `

        <h3>
            🚜 ₹${savedRental.totalCost}
        </h3>

        <p>
            <strong>Equipment:</strong>
            ${savedRental.equipment}
        </p>

        <p>
            <strong>Duration:</strong>
            ${savedRental.days} day(s)
        </p>

        <p>
            <strong>Rate:</strong>
            ₹${savedRental.rate}/day
        </p>

    `;
}


// =====================================
// LOAD DASHBOARD RENTAL
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardRental();

    }
);
// =====================================
// DASHBOARD CROP ROTATION
// =====================================

function updateDashboardRotation() {

    const dashboardRotation =
        document.getElementById("dashboardRotation");

    if (!dashboardRotation) {
        return;
    }

    const savedRotation =
        JSON.parse(
            localStorage.getItem("lastCropRotation")
        );

    if (!savedRotation) {

        dashboardRotation.innerHTML = `
            <p>
                No rotation recommendation yet.
            </p>
        `;

        return;
    }

    dashboardRotation.innerHTML = `

        <h3>
            ${savedRotation.nextCrop}
        </h3>

        <p>
            <strong>Current Crop:</strong>
            ${savedRotation.currentCrop}
        </p>

        <p>
            <strong>Why:</strong>
            ${savedRotation.reason}
        </p>

        <p>
            <strong>Benefit:</strong>
            ${savedRotation.benefit}
        </p>

    `;
}


// =====================================
// LOAD DASHBOARD CROP ROTATION
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardRotation();

    }
);
// =====================================
// DASHBOARD FERTILIZER RESULT
// =====================================

function updateDashboardFertilizer() {

    const dashboardFertilizer =
        document.getElementById("dashboardFertilizer");

    if (!dashboardFertilizer) {
        return;
    }

    const savedFertilizer =
        JSON.parse(
            localStorage.getItem("lastFertilizer")
        );

    if (!savedFertilizer) {

        dashboardFertilizer.innerHTML = `
            <p>
                No fertilizer recommendation yet.
            </p>
        `;

        return;
    }

    dashboardFertilizer.innerHTML = `

        <h3>
            🌿 ${savedFertilizer.fertilizer}
        </h3>

        <p>
            <strong>Crop:</strong>
            ${savedFertilizer.crop}
        </p>

        <p>
            <strong>Quantity:</strong>
            ${savedFertilizer.quantity}
        </p>

        <p>
            <strong>Timing:</strong>
            ${savedFertilizer.timing}
        </p>

    `;
}


// =====================================
// LOAD DASHBOARD FERTILIZER
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardFertilizer();

    }
);
// ==========================================
// LANGUAGE SELECTION
// ==========================================

function changeLanguage() {

    const language =
        document.getElementById("languageSelect").value;

    const translations = {

        en: {
            cropManagement: "🌱 Crop Management",
            cropDescription:
                "Manage your crops and get smart farming recommendations.",
            selectCrop: "Select Your Crop",
            selectCropInstruction:
                "Click on the crop photo to select"
        },

        mr: {
            cropManagement: "🌱 पीक व्यवस्थापन",
            cropDescription:
                "तुमच्या पिकांचे व्यवस्थापन करा आणि स्मार्ट शेतीच्या शिफारसी मिळवा.",
            selectCrop: "तुमचे पीक निवडा",
            selectCropInstruction:
                "पीक निवडण्यासाठी त्याच्या फोटोवर क्लिक करा"
        },

        hi: {
            cropManagement: "🌱 फसल प्रबंधन",
            cropDescription:
                "अपनी फसलों का प्रबंधन करें और स्मार्ट खेती की सलाह प्राप्त करें।",
            selectCrop: "अपनी फसल चुनें",
            selectCropInstruction:
                "फसल चुनने के लिए उसकी फोटो पर क्लिक करें"
        }

    };

    const selectedLanguage =
        translations[language];

    document
        .querySelectorAll("[data-translate]")
        .forEach(function(element) {

            const key =
                element.getAttribute("data-translate");

            if (selectedLanguage[key]) {

                element.textContent =
                    selectedLanguage[key];

            }

        });

}
// ==========================================
// CROP IMAGE SELECTION
// ==========================================

function selectCrop(crop) {

    const selectedCropMessage =
        document.getElementById("selectedCropMessage");

    if (!selectedCropMessage) {
        return;
    }

    // Remove previous selection
    document
        .querySelectorAll(".crop-image-card")
        .forEach(function(card) {
            card.classList.remove("selected-crop");
        });

    // Highlight selected crop
    const selectedCard =
        document.querySelector(
            `.crop-image-card[onclick="selectCrop('${crop}')"]`
        );

    if (selectedCard) {
        selectedCard.classList.add("selected-crop");
    }

    const cropNames = {
        tomato: "🍅 Tomato",
        wheat: "🌾 Wheat",
        rice: "🍚 Rice",
        onion: "🧅 Onion",
        cotton: "🌿 Cotton"
    };

    const selectedCrop =
        cropNames[crop];

    selectedCropMessage.innerHTML = `
        <h3>✅ Selected Crop</h3>
        <p>${selectedCrop}</p>
    `;

    localStorage.setItem(
        "selectedCrop",
        crop
    );
}
// =====================================
// FINAL IRRIGATION RECOMMENDATION
// =====================================

function updateDashboardIrrigationRecommendation() {

    const recommendationElement =
        document.getElementById(
            "irrigationRecommendationDashboard"
        );

    if (!recommendationElement) {
        return;
    }

    let weatherData = null;

    try {

        weatherData = JSON.parse(
            localStorage.getItem("weatherData")
        );

    } catch (error) {

        weatherData = null;

    }


    // =====================================
    // WEATHER DATA NOT AVAILABLE
    // =====================================

    if (!weatherData) {

        recommendationElement.innerHTML =
            "⚠️ WEATHER DATA REQUIRED";

        return;
    }


    // =====================================
    // GET RAIN PROBABILITY
    // =====================================

    const rain =
        Number(weatherData.rain);


    // =====================================
    // INVALID WEATHER DATA
    // =====================================

    if (isNaN(rain)) {

        recommendationElement.innerHTML =
            "⚠️ WEATHER DATA UNAVAILABLE";

        return;
    }


    // =====================================
    // FINAL IRRIGATION DECISION
    // =====================================

    if (rain >= 40) {

        recommendationElement.innerHTML =
            "🌧️ IRRIGATION NOT REQUIRED";

    } else {

        recommendationElement.innerHTML =
            "💧 IRRIGATION REQUIRED";

    }

}


// =====================================
// LOAD IRRIGATION RECOMMENDATION
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardIrrigationRecommendation();

    }
);
/* =====================================
   SMART CROP RECOMMENDATION
===================================== */

function getSmartCropRecommendation() {

    const result =
        document.getElementById("smartCropResult");

    if (!result) {
        return;
    }

    let soilData = null;
    let weatherData = null;

    try {
        soilData =
            JSON.parse(localStorage.getItem("soilData"));
    } catch (error) {
        soilData = null;
    }

    try {
        weatherData =
            JSON.parse(localStorage.getItem("weatherData"));
    } catch (error) {
        weatherData = null;
    }

    if (!soilData) {
        result.innerHTML = `
            <p>⚠️ Please upload and save your soil report first.</p>
        `;
        return;
    }

    if (!weatherData) {
        result.innerHTML = `
            <p>🌦️ Please update weather information first.</p>
        `;
        return;
    }

    const ph = Number(soilData.pH);
    const nitrogen = Number(soilData.nitrogen);
    const phosphorus = Number(soilData.phosphorus);
    const potassium = Number(soilData.potassium);

    const temperature =
        Number(
            weatherData.temperature ??
            weatherData.temp
        );

    const rain =
        Number(weatherData.rain);

    if (
        isNaN(ph) ||
        isNaN(nitrogen) ||
        isNaN(phosphorus) ||
        isNaN(potassium) ||
        isNaN(temperature) ||
        isNaN(rain)
    ) {
        result.innerHTML = `
            <p>
                ⚠️ Soil or weather data is incomplete.
                Please check your saved data.
            </p>
        `;
        return;
    }

    /* Crop suitability rules */

    const crops = [

        {
            name: "Tomato 🍅",
            score: 0,
            ph: [6.0, 7.5],
            temperature: [20, 30],
            rain: [20, 60]
        },

        {
            name: "Wheat 🌾",
            score: 0,
            ph: [6.0, 7.5],
            temperature: [15, 25],
            rain: [20, 50]
        },

        {
            name: "Rice 🌾",
            score: 0,
            ph: [5.5, 7.0],
            temperature: [20, 35],
            rain: [60, 100]
        },

        {
            name: "Onion 🧅",
            score: 0,
            ph: [6.0, 7.5],
            temperature: [13, 25],
            rain: [20, 50]
        },

        {
            name: "Cotton 🌿",
            score: 0,
            ph: [6.0, 8.0],
            temperature: [21, 35],
            rain: [30, 80]
        }

    ];


    crops.forEach(crop => {

        /* Soil pH */

        if (
            ph >= crop.ph[0] &&
            ph <= crop.ph[1]
        ) {
            crop.score += 30;
        } else if (
            ph >= crop.ph[0] - 0.5 &&
            ph <= crop.ph[1] + 0.5
        ) {
            crop.score += 15;
        }


        /* Temperature */

        if (
            temperature >= crop.temperature[0] &&
            temperature <= crop.temperature[1]
        ) {
            crop.score += 25;
        } else if (
            temperature >= crop.temperature[0] - 3 &&
            temperature <= crop.temperature[1] + 3
        ) {
            crop.score += 10;
        }


        /* Rain probability */

        if (
            rain >= crop.rain[0] &&
            rain <= crop.rain[1]
        ) {
            crop.score += 20;
        } else if (
            rain >= crop.rain[0] - 15 &&
            rain <= crop.rain[1] + 15
        ) {
            crop.score += 10;
        }

    });


    /* Nutrient suitability */

    crops.forEach(crop => {

        if (nitrogen >= 280) {
            crop.score += 5;
        }

        if (phosphorus >= 25) {
            crop.score += 5;
        }

        if (potassium >= 120) {
            crop.score += 5;
        }

    });


    /* Sort crops by score */

    crops.sort(
        (a, b) => b.score - a.score
    );


    const bestCrop = crops[0];
    localStorage.setItem(
    "smartCropRecommendation",
    JSON.stringify({
        crop: bestCrop.name,
        score: bestCrop.score
    })
);


    /* Display result */

    result.innerHTML = `

        <h3>🌱 Recommended Crop</h3>

        <h2>
            ${bestCrop.name}
        </h2>

        <p>
            <strong>Suitability Score:</strong>
            ${bestCrop.score}/100
        </p>

        <p>
            🌱 Recommendation is based on
            soil pH, N/P/K nutrients,
            temperature and rain probability.
        </p>

    `;
}



/* =========================================
   AGRITRACK DEMO REGISTRATION AND LOGIN
   Add this block at the END of app.js
========================================= */

function registerUser() {
    const name = document.getElementById("registerName")?.value.trim();
    const mobile = document.getElementById("registerMobile")?.value.trim();
    const email = document.getElementById("registerEmail")?.value.trim().toLowerCase();
    const password = document.getElementById("registerPassword")?.value;
    const accountType = document.getElementById("accountType")?.value;
    const message = document.getElementById("registerMessage");

    function showMessage(text) {
        if (message) message.textContent = text;
        else alert(text);
    }

    if (!name || !mobile || !email || !password || !accountType) {
        showMessage("Please fill in all fields.");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        showMessage("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must contain at least 6 characters.");
        return;
    }

    let users = [];

    try {
        users = JSON.parse(localStorage.getItem("agriTrackUsers")) || [];
    } catch (error) {
        showMessage("Could not read saved accounts. Please try again.");
        return;
    }

    const existingUser = users.find(user =>
        user.email === email || user.mobile === mobile
    );

    if (existingUser) {
        showMessage("An account with this email or mobile number already exists.");
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name,
        mobile: mobile,
        email: email,
        password: password,
        accountType: accountType
    };

    users.push(newUser);

    try {
        localStorage.setItem("agriTrackUsers", JSON.stringify(users));
        localStorage.setItem("pendingLoginIdentifier", email);
    } catch (error) {
        showMessage("Unable to save your account in this browser.");
        return;
    }

    alert("Registration successful! Please log in.");
    window.location.href = "login.html";
}


function loginUser() {
    const identifier = document.getElementById("loginUsername")?.value.trim().toLowerCase();
    const password = document.getElementById("loginPassword")?.value;
    const rememberMe = document.getElementById("rememberMe")?.checked;
    const message = document.getElementById("loginMessage");

    function showMessage(text) {
        if (message) message.textContent = text;
        else alert(text);
    }

    if (!identifier || !password) {
        showMessage("Please enter your email/mobile number and password.");
        return;
    }

    let users = [];

    try {
        users = JSON.parse(localStorage.getItem("agriTrackUsers")) || [];
    } catch (error) {
        showMessage("Could not read saved accounts. Please try again.");
        return;
    }

    const user = users.find(savedUser =>
        (savedUser.email === identifier || savedUser.mobile === identifier) &&
        savedUser.password === password
    );

    if (!user) {
        showMessage("Incorrect login details, or account not found. Please register first.");
        return;
    }

    const currentUser = {
        id: user.id,
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        accountType: user.accountType
    };

    try {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("accountType", user.accountType);

        if (rememberMe) {
            localStorage.setItem("rememberedLogin", identifier);
        } else {
            localStorage.removeItem("rememberedLogin");
        }

        localStorage.removeItem("pendingLoginIdentifier");
    } catch (error) {
        showMessage("Unable to save your login session in this browser.");
        return;
    }

    window.location.href = "profile.html";
}


/* Fill the login identifier after registration
   or when Remember me was selected. */

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("loginUsername");

    if (!usernameInput) return;

    const savedIdentifier =
        localStorage.getItem("rememberedLogin") ||
        localStorage.getItem("pendingLoginIdentifier");

    if (savedIdentifier) {
        usernameInput.value = savedIdentifier;
    }
});
