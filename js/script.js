// ===== GLOBAL VARIABLES AND DATA =====
let currentPage = '';
let workoutTimer = null;
let meditationTimer = null;
let breathingTimer = null;
let currentSound = null;

// Health Tips Data
const healthTips = [
    {
        title: "Stay Hydrated",
        content: "Drink at least 8 glasses of water daily to maintain optimal body function and healthy skin.",
        // icon: "💧"
    },
    {
        title: "Get Moving",
        content: "Aim for at least 30 minutes of moderate exercise daily to boost energy and mood.",
        // icon: "🏃‍♂️"
    },
    {
        title: "Eat Rainbow Colors",
        content: "Include colorful fruits and vegetables in your diet for a variety of nutrients.",
        // icon: "🌈"
    },
    {
        title: "Sleep Well",
        content: "Get 7-9 hours of quality sleep each night for better physical and mental health.",
        // icon: "😴"
    },
    {
        title: "Practice Gratitude",
        content: "Take a few minutes each day to appreciate what you have for better mental wellbeing.",
        // icon: "🙏"
    },
    {
        title: "Take Deep Breaths",
        content: "Practice deep breathing exercises to reduce stress and improve focus.",
        // icon: "🧘‍♀️"
    },
    {
        title: "Connect with Nature",
        content: "Spend time outdoors daily to reduce stress and boost vitamin D levels.",
        // icon: "🌱"
    }
];

// Hero Slogans Data
const heroSlogans = [
    "Your Journey to Wellness Starts Here",
    "Nourish Your Body, Feed Your Soul",
    "Healthy Living Made Simple",
    "Transform Your Life One Bite at a Time",
    "Wellness is a Journey, Not a Destination",
    "Your Health is Your Wealth"
];

// Recipe Data
const recipesData = [
    {
        id: 1,
        title: "Quinoa Power Bowl",
        category: "lunch",
        description: "A nutritious bowl packed with quinoa, vegetables, and protein.",
        image: "images/quinoa.jpeg",
        prepTime: "20 min",
        servings: "2",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 cup chickpeas",
            "1 avocado, sliced",
            "1 cup cherry tomatoes",
            "1/2 cucumber, diced",
            "2 tbsp tahini",
            "1 lemon, juiced",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Rinse quinoa under cold water until water runs clear",
            "Bring vegetable broth to boil, add quinoa, reduce heat and simmer for 15 minutes",
            "Drain and rinse chickpeas, season with salt and pepper",
            "Prepare all vegetables by washing and chopping",
            "Make dressing by whisking tahini, lemon juice, and olive oil",
            "Assemble bowl with quinoa as base, top with vegetables and chickpeas",
            "Drizzle with dressing and serve immediately"
        ],
        nutrition: {
            calories: 450,
            protein: "18g",
            carbs: "52g",
            fat: "20g",
            fiber: "12g"
        }
    },
    {
        id: 2,
        title: "Green Smoothie Bowl",
        category: "breakfast",
        description: "Refreshing smoothie bowl packed with greens and topped with fresh fruits.",
        image: "images/smoothie.jpeg",
        prepTime: "10 min",
        servings: "1",
        ingredients: [
            "1 frozen banana",
            "1 cup spinach",
            "1/2 avocado",
            "1 cup almond milk",
            "1 tbsp almond butter",
            "1 tsp honey",
            "1/4 cup blueberries",
            "2 tbsp granola",
            "1 tbsp chia seeds"
        ],
        instructions: [
            "Add banana, spinach, avocado, and almond milk to blender",
            "Blend until smooth and creamy",
            "Add almond butter and honey, blend again",
            "Pour into bowl",
            "Top with blueberries, granola, and chia seeds",
            "Serve immediately while cold"
        ],
        nutrition: {
            calories: 320,
            protein: "12g",
            carbs: "35g",
            fat: "18g",
            fiber: "10g"
        }
    },
    {
        id: 3,
        title: "Grilled Salmon with Vegetables",
        category: "dinner",
        description: "Heart-healthy salmon paired with roasted seasonal vegetables.",
        image: "images/salmon.jpeg",
        prepTime: "25 min",
        servings: "4",
        ingredients: [
            "4 salmon fillets (6oz each)",
            "2 zucchini, sliced",
            "1 red bell pepper, chopped",
            "1 yellow bell pepper, chopped",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 lemon, sliced",
            "2 tbsp fresh dill",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat grill to medium-high heat",
            "Season salmon with salt, pepper, and half the dill",
            "Toss vegetables with olive oil, garlic, salt, and pepper",
            "Grill salmon 4-5 minutes per side until flaky",
            "Grill vegetables in foil packet for 15 minutes",
            "Serve salmon with vegetables and lemon slices",
            "Garnish with remaining fresh dill"
        ],
        nutrition: {
            calories: 380,
            protein: "35g",
            carbs: "8g",
            fat: "22g",
            fiber: "3g"
        }
    },
    {
        id: 4,
        title: "Energy Balls",
        category: "snack",
        description: "No-bake energy balls perfect for pre-workout fuel.",
        image: "images/energyballs.jpeg",
        prepTime: "15 min",
        servings: "12 balls",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup peanut butter",
            "1/3 cup honey",
            "1/3 cup mini chocolate chips",
            "1/3 cup ground flaxseed",
            "1 tsp vanilla extract",
            "1/2 tsp cinnamon",
            "Pinch of salt"
        ],
        instructions: [
            "Mix all ingredients in a large bowl",
            "Stir until well combined",
            "Chill mixture in refrigerator for 30 minutes",
            "Roll into 12 small balls",
            "Store in refrigerator for up to one week",
            "Serve chilled as needed"
        ],
        nutrition: {
            calories: 120,
            protein: "4g",
            carbs: "15g",
            fat: "6g",
            fiber: "2g"
        }
    },
    {
        id: 5,
        title: "Avocado Toast",
                description: "A simple yet delicious breakfast option",
                category: "breakfast",
                image: "images/toast.jpeg",
                prepTime: "5 min",
                servings: "2 ",
                ingredients: [
                    "2 slices whole grain bread",
                    "1 ripe avocado",
                    "1/2 lemon, juiced",
                    "Salt and pepper to taste",
                    "Red pepper flakes (optional)",
                    "Cherry tomatoes, halved (for topping)"
            
                ],
                instructions: [
                    "Toast the bread slices until golden brown",
                    "In a bowl, mash the avocado with lemon juice, salt, and pepper",
                    "Spread the avocado mixture evenly on each slice of toast",
                    "Top with cherry tomatoes and red pepper flakes if desired",
                    "Serve immediately and enjoy!"                    
                ],
                nutrition: {
                    calories: 320,
                    protein: 8,
                    carbs: 40,
                    fat: 16,
                    fiber: 10
                   
                }

            },
            {
            id: 6,
            title:"One Pan Chicken and Veggies",
            category: "dinner",
            description: "A quick and healthy one-pan meal.",
            image: "images/chickenandveggies.jpeg",
            prepTime: "10 min",
            cookTime: "30 min",
            servings: "4",
            ingredients: [
                "4 boneless, skinless chicken breasts",
                "2 cups broccoli florets",
                "1 red bell pepper, sliced",
                "1 yellow bell pepper, sliced",
                "2 tbsp olive oil",
                "1 tsp garlic powder",
                "1 tsp onion powder",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Preheat oven to 400°F (200°C).",
                "In a large bowl, toss chicken and vegetables with olive oil, garlic powder, onion powder, salt, and pepper.",
                "Spread mixture on a baking sheet in a single layer.",
                "Bake for 25-30 minutes or until chicken is cooked through.",
                "Serve warm and enjoy!"
            ],
            nutrition: {
                calories: 350,
                protein: "40g",
                carbs: "12g",
                fat: "15g",
                fiber: "4g"
            }
        }

];

// Workout Exercises Data
const workoutExercises = {
    arms: {
        none: ["Push-ups", "Pike Push-ups", "Tricep Dips", "Plank to Downward Dog"],
        dumbbells: ["Bicep Curls", "Overhead Press", "Tricep Extensions", "Hammer Curls"],
        resistance: ["Resistance Band Curls", "Band Pull-Aparts", "Overhead Band Press", "Band Tricep Extensions"],
        gym: ["Pull-ups", "Lat Pulldowns", "Cable Curls", "Dumbbell Press"]
    },
    legs: {
        none: ["Bodyweight Squats", "Lunges", "Calf Raises", "Wall Sit"],
        dumbbells: ["Goblet Squats", "Romanian Deadlifts", "Weighted Lunges", "Calf Raises"],
        resistance: ["Band Squats", "Lateral Band Walks", "Band Glute Bridges", "Standing Band Kickbacks"],
        gym: ["Leg Press", "Barbell Squats", "Leg Curls", "Leg Extensions"]
    },
    chest: {
        none: ["Push-ups", "Wide Push-ups", "Diamond Push-ups", "Incline Push-ups"],
        dumbbells: ["Chest Press", "Flyes", "Incline Press", "Pullovers"],
        resistance: ["Band Chest Press", "Band Flyes", "Band Pull-Aparts", "Cross-body Band Press"],
        gym: ["Bench Press", "Incline Bench Press", "Cable Flyes", "Dips"]
    },
    back: {
        none: ["Superman", "Reverse Flyes", "Bird Dogs", "Good Mornings"],
        dumbbells: ["Bent-over Rows", "Single-arm Rows", "Reverse Flyes", "Deadlifts"],
        resistance: ["Band Rows", "Band Pull-Aparts", "Band Lat Pulldowns", "Face Pulls"],
        gym: ["Pull-ups", "Lat Pulldowns", "Cable Rows", "T-Bar Rows"]
    },
    core: {
        none: ["Plank", "Russian Twists", "Bicycle Crunches", "Mountain Climbers"],
        dumbbells: ["Weighted Crunches", "Russian Twists with Weight", "Wood Choppers", "Weighted Planks"],
        resistance: ["Band Crunches", "Band Wood Choppers", "Band Russian Twists", "Pallof Press"],
        gym: ["Cable Crunches", "Hanging Leg Raises", "Cable Wood Choppers", "Ab Wheel Rollouts"]
    },
    fullbody: {
        none: ["Burpees", "Mountain Climbers", "Jumping Jacks", "High Knees"],
        dumbbells: ["Thrusters", "Man Makers", "Renegade Rows", "Turkish Get-ups"],
        resistance: ["Band Squats to Press", "Band Burpees", "Band Mountain Climbers", "Full Body Band Circuit"],
        gym: ["Deadlifts", "Clean and Press", "Kettlebell Swings", "Battle Ropes"]
    }
};

// Exercise Descriptions Data
const exerciseDescriptions = {
    "Push-ups": "A classic bodyweight move that targets your chest, shoulders, and triceps. Keep your body straight and lower until elbows are at 90 degrees.",
    "Pike Push-ups": "A push-up variation with hips raised, focusing on shoulders and upper chest. Keep your core tight throughout.",
    "Tricep Dips": "Use a chair or bench to lower and lift your body, working the triceps. Keep elbows close to your body.",
    "Plank to Downward Dog": "Alternate between a plank and downward dog position to strengthen core and shoulders.",
    "Bicep Curls": "Curl dumbbells or bands upward, keeping elbows close. Works the biceps.",
    "Overhead Press": "Press weights overhead from shoulder height, engaging shoulders and arms.",
    "Tricep Extensions": "Lift weights overhead and lower behind your head, targeting the triceps.",
    "Hammer Curls": "Curl dumbbells with palms facing each other for forearm and bicep strength.",
    "Resistance Band Curls": "Stand on a band and curl handles up, working the biceps.",
    "Band Pull-Aparts": "Hold a resistance band and pull it apart to strengthen upper back and shoulders.",
    "Overhead Band Press": "Press resistance bands overhead to work shoulders and arms.",
    "Band Tricep Extensions": "Extend resistance bands overhead to target triceps.",
    "Pull-ups": "Hang from a bar and pull your chin above it. Great for back and arms.",
    "Lat Pulldowns": "Pull a bar down to your chest, working your back and biceps.",
    "Cable Curls": "Use a cable machine to curl the handle, isolating the biceps.",
    "Dumbbell Press": "Press dumbbells overhead or on a bench to build upper body strength.",
    "Bodyweight Squats": "Lower your hips from standing and return. Strengthens legs and glutes.",
    "Lunges": "Step forward and lower until both knees are bent at 90°. Works legs and balance.",
    "Calf Raises": "Lift your heels off the ground to strengthen calves.",
    "Wall Sit": "Hold a seated position against a wall to build leg endurance.",
    "Goblet Squats": "Hold a weight at your chest while squatting for added resistance.",
    "Romanian Deadlifts": "Hinge at the hips with weights, keeping back straight. Targets hamstrings.",
    "Weighted Lunges": "Perform lunges while holding weights for extra challenge.",
    "Band Squats": "Use a resistance band for added tension during squats.",
    "Lateral Band Walks": "Step side-to-side with a band around your legs to work hips.",
    "Band Glute Bridges": "Lift hips with a band for glute activation.",
    "Standing Band Kickbacks": "Kick one leg back against band resistance to target glutes.",
    "Leg Press": "Push weight away with your legs on a machine. Builds lower body strength.",
    "Barbell Squats": "Squat with a barbell on your shoulders for full-leg strength.",
    "Leg Curls": "Curl your legs toward your glutes on a machine to work hamstrings.",
    "Leg Extensions": "Extend your legs on a machine to target the quadriceps.",
    "Wide Push-ups": "Push-ups with hands wider than shoulders to target chest.",
    "Diamond Push-ups": "Push-ups with hands close together in a diamond shape for triceps.",
    "Incline Push-ups": "Push-ups with hands elevated to reduce intensity.",
    "Chest Press": "Press weights away from your chest on a bench to build chest strength.",
    "Flyes": "Open and close arms with weights to work chest muscles.",
    "Incline Press": "Press weights at an incline to target upper chest.",
    "Pullovers": "Move a weight from above your chest to behind your head, stretching chest and lats.",
    "Band Chest Press": "Press resistance bands forward to work chest.",
    "Band Flyes": "Open and close arms with bands for chest activation.",
    "Cross-body Band Press": "Press bands across your body to work chest and shoulders.",
    "Bench Press": "Press a barbell from your chest upward on a bench.",
    "Incline Bench Press": "Bench press at an incline to target upper chest.",
    "Cable Flyes": "Use cables to fly arms together, isolating chest.",
    "Dips": "Lower and lift your body on parallel bars for chest and triceps.",
    "Superman": "Lie face down and lift arms and legs to strengthen lower back.",
    "Reverse Flyes": "Bend forward and lift arms out to sides, working upper back.",
    "Bird Dogs": "On hands and knees, extend opposite arm and leg for core stability.",
    "Good Mornings": "Hinge at hips with a straight back to work hamstrings and lower back.",
    "Bent-over Rows": "Pull weights toward your waist while bent over, targeting back.",
    "Single-arm Rows": "Row one arm at a time for unilateral back strength.",
    "Deadlifts": "Lift weights from the ground with a straight back for full-body strength.",
    "Band Rows": "Pull resistance bands toward you to work back muscles.",
    "Band Lat Pulldowns": "Pull bands down from overhead to target lats.",
    "Face Pulls": "Pull bands or cables toward your face for rear deltoids.",
    "Cable Rows": "Row a cable handle toward your torso for back strength.",
    "T-Bar Rows": "Row a T-bar toward your chest for mid-back development.",
    "Plank": "Hold a straight-body position on forearms and toes to build core strength.",
    "Russian Twists": "Sit, lean back, and twist your torso side to side for obliques.",
    "Bicycle Crunches": "Alternate elbow to opposite knee in a crunch for core activation.",
    "Mountain Climbers": "In plank, alternate knees toward chest quickly for cardio and core.",
    "Weighted Crunches": "Perform crunches holding a weight for added resistance.",
    "Russian Twists with Weight": "Twist holding a weight for more oblique challenge.",
    "Wood Choppers": "Swing a weight diagonally across your body to work core.",
    "Weighted Planks": "Hold a plank with added weight for extra core strength.",
    "Band Crunches": "Crunch with resistance bands for core activation.",
    "Band Wood Choppers": "Twist with a band for rotational core strength.",
    "Band Russian Twists": "Twist with a band for oblique engagement.",
    "Pallof Press": "Press a band away from your chest to resist rotation.",
    "Burpees": "A full-body move combining a squat, plank, and jump. Builds strength and endurance.",
    "Jumping Jacks": "Jump while spreading your legs and arms, then return. Good for cardio.",
    "High Knees": "Run in place, lifting your knees high. Great for warming up and cardio.",
    "Thrusters": "Squat with weights, then press overhead as you stand. Works full body.",
    "Man Makers": "A complex move combining push-up, row, squat, and press. Full-body challenge.",
    "Renegade Rows": "In plank, row dumbbells alternately. Strengthens back and core.",
    "Turkish Get-ups": "A multi-step move from lying to standing with a weight overhead. Improves stability.",
    "Band Squats to Press": "Squat with a band, then press overhead. Works lower and upper body.",
    "Band Burpees": "Do burpees with a resistance band for extra challenge.",
    "Band Mountain Climbers": "Mountain climbers with a band for added resistance.",
    "Full Body Band Circuit": "A sequence of band exercises for a total body workout.",
    "Clean and Press": "Lift a weight from floor to shoulders, then press overhead. Full-body strength.",
    "Kettlebell Swings": "Swing a kettlebell from between your legs to chest height. Builds power.",
    "Battle Ropes": "Wave heavy ropes in various patterns for cardio and strength."
   
};

// ===== UTILITY FUNCTIONS =====

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    return page === '' || page === 'index.html' ? 'home' : page.replace('.html', '');
}

// Format time display
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Animate number counting
function animateNumber(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Show message with animation
function showMessage(elementId, message, type = 'success', duration = 3000) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.textContent = message;
    element.className = `message ${type}`;
    element.style.display = 'block';
    element.style.opacity = '0';
    
    // Fade in
    setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease';
        element.style.opacity = '1';
    }, 10);

    // Fade out after duration
    setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }, duration);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Save to localStorage with error handling
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

// Load from localStorage with error handling
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return defaultValue;
    }
}

// ===== NAVIGATION FUNCTIONALITY =====

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}

// ===== HOME PAGE FUNCTIONALITY =====

function initHomePage() {
    // Auto-rotating hero slogans
    const heroSloganElement = document.getElementById('heroSlogan');
    if (heroSloganElement) {
        let currentSloganIndex = 0;
        
        function rotateSlogan() {
            heroSloganElement.style.opacity = '0';
            
            setTimeout(() => {
                currentSloganIndex = (currentSloganIndex + 1) % heroSlogans.length;
                heroSloganElement.textContent = heroSlogans[currentSloganIndex];
                heroSloganElement.style.opacity = '1';
            }, 300);
        }
        
        // Rotate every 4 seconds
        setInterval(rotateSlogan, 4000);
    }

    // Daily health tip
    const tipTitle = document.getElementById('tipTitle');
    const tipContent = document.getElementById('tipContent');
    const tipIcon = document.querySelector('.tip-icon');
    
    if (tipTitle && tipContent && tipIcon) {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const tipIndex = dayOfYear % healthTips.length;
        const todaysTip = healthTips[tipIndex];
        
        tipTitle.textContent = todaysTip.title;
        tipContent.textContent = todaysTip.content;
        tipIcon.textContent = todaysTip.icon;
    }

    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value.trim();
            
            if (!isValidEmail(email)) {
                showMessage('newsletterMessage', 'Please enter a valid email address.', 'error');
                return;
            }
            
            // Save email to localStorage
            const subscribers = loadFromStorage('newsletterSubscribers', []);
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                saveToStorage('newsletterSubscribers', subscribers);
                showMessage('newsletterMessage', 'Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            } else {
                showMessage('newsletterMessage', 'You are already subscribed!', 'error');
            }
        });
    }
}

// ===== RECIPES PAGE FUNCTIONALITY =====

function initRecipesPage() {
    const recipeGrid = document.getElementById('recipeGrid');
    const searchInput = document.getElementById('recipeSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close');
    
    if (!recipeGrid) return;

    // Display recipes
    function displayRecipes(recipes) {
        recipeGrid.innerHTML = recipes.map(recipe => {
            let imageHtml = '';
            if (typeof recipe.image === 'string' && recipe.image.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
                imageHtml = `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-img" />`;
            } else {
                imageHtml = `<span class="recipe-emoji">${recipe.image}</span>`;
            }
            return `
                <div class="recipe-card" onclick="openRecipeModal(${recipe.id})">
                    <div class="recipe-image">${imageHtml}</div>
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-meta">
                            <span>⏱ ${recipe.prepTime || ''}</span>
                            <span> | ${recipe.servings || ''} servings</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Filter recipes
    function filterRecipes() {
        const searchTerm = searchInput?.value.toLowerCase() || '';
        const selectedCategory = categoryFilter?.value || 'all';
        
        const filtered = recipesData.filter(recipe => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                                recipe.description.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        displayRecipes(filtered);
    }

    // Open recipe modal
    window.openRecipeModal = function(recipeId) {
        const recipe = recipesData.find(r => r.id === recipeId);
        if (!recipe || !modalBody) return;

    modalBody.innerHTML = `
        <h2>${recipe.title}</h2>
        <div class="recipe-meta">
            <span> ⏱ ${recipe.prepTime}</span>
            <span> | ${recipe.servings} servings</span>
            <span> | ${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
        </div>
        
        <div class="recipe-ingredients">
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-instructions">
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
        
        <div class="recipe-nutrition">
            <h3>Nutrition Information (per serving)</h3>
            <table class="nutrition-table">
                <tr>
                    <th>Calories</th>
                    <td>${recipe.nutrition.calories}</td>
                </tr>
                <tr>
                    <th>Protein</th>
                    <td>${recipe.nutrition.protein}</td>
                </tr>
                <tr>
                    <th>Carbohydrates</th>
                    <td>${recipe.nutrition.carbs}</td>
                </tr>
                <tr>
                    <th>Fat</th>
                    <td>${recipe.nutrition.fat}</td>
                </tr>
                <tr>
                    <th>Fiber</th>
                    <td>${recipe.nutrition.fiber}</td>
                </tr>
            </table>
        </div>
    `;
    
    modal.style.display = 'block';
};

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Add event listeners for search and filter
if (searchInput) {
    searchInput.addEventListener('input', filterRecipes);
}

if (categoryFilter) {
    categoryFilter.addEventListener('change', filterRecipes);
}

// Initial display
displayRecipes(recipesData);
}

// ===== CALCULATOR PAGE FUNCTIONALITY =====

function initCalculatorPage() {
const calculatorForm = document.getElementById('calculatorForm');
const resultsSection = document.getElementById('results');
const suggestionsSection = document.getElementById('suggestionsSection');
const suggestionText = document.getElementById('suggestionText');

if (!calculatorForm || !resultsSection) return;

calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    // Validate inputs
    if (!age || !gender || !height || !weight || !activity) {
        alert('Please fill in all fields');
        return;
    }
    
    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activity;
    
    // Calculate macronutrients (based on 50% carbs, 20% protein, 30% fat)
    const carbsGrams = Math.round((tdee * 0.5) / 4); // 4 calories per gram
    const proteinGrams = Math.round((tdee * 0.2) / 4); // 4 calories per gram
    const fatGrams = Math.round((tdee * 0.3) / 9); // 9 calories per gram
    
    // Display results with animations
    animateNumber(document.getElementById('bmrValue'), Math.round(bmr));
    animateNumber(document.getElementById('tdeeValue'), Math.round(tdee));
    
    document.getElementById('carbsValue').textContent = `${carbsGrams}g`;
    document.getElementById('proteinValue').textContent = `${proteinGrams}g`;
    document.getElementById('fatValue').textContent = `${fatGrams}g`;
    
    // Animate progress bars
    setTimeout(() => {
        document.getElementById('carbsBar').style.width = '100%';
        document.getElementById('proteinBar').style.width = '100%';
        document.getElementById('fatBar').style.width = '100%';
    }, 500);
    
    // Show results section
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Save calculation to history
    const calculationHistory = loadFromStorage('calculatorHistory', []);
    calculationHistory.unshift({
        date: new Date().toISOString(),
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        macros: { carbs: carbsGrams, protein: proteinGrams, fat: fatGrams }
    });
    
    // Keep only last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory.pop();
    }
    
    saveToStorage('calculatorHistory', calculationHistory);

    // Suggestion logic based on TDEE
    let suggestion = '';
    if (tdee < 1600) {
        suggestion = "Your calorie needs are on the lower side. Focus on nutrient-dense foods and avoid skipping meals.";
    } else if (tdee < 2200) {
        suggestion = "You have moderate calorie needs. Maintain a balanced diet with plenty of vegetables, lean proteins, and whole grains.";
    } else if (tdee < 2800) {
        suggestion = "Your calorie needs are above average. Ensure you get enough protein and healthy fats to support your activity level.";
    } else {
        suggestion = "You have high calorie needs. Consider consulting a nutritionist for a personalized plan, especially if you have specific fitness goals.";
    }

    suggestionText.textContent = suggestion;
    suggestionsSection.style.display = 'block';
});
}

// ===== WORKOUT PAGE FUNCTIONALITY =====

function initWorkoutPage() {
const workoutForm = document.getElementById('workoutForm');
const workoutPlan = document.getElementById('workoutPlan');
const exerciseList = document.getElementById('exerciseList');
const timerSection = document.getElementById('timerSection');
const currentExercise = document.getElementById('currentExercise');
const timerText = document.getElementById('timerText');
const timerProgress = document.getElementById('timerProgress');
const startTimer = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const resetTimer = document.getElementById('resetTimer');
const nextExercise = document.getElementById('nextExercise');

let currentExercises = [];
let currentExerciseIndex = 0;
let timerSeconds = 60;
let timerInterval = null;

if (!workoutForm) return;

workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get selected body parts
    const selectedBodyParts = Array.from(
        document.querySelectorAll('input[name="bodyPart"]:checked')
    ).map(input => input.value);
    
    // Get equipment
    const equipment = document.getElementById('equipment').value;
    
    if (selectedBodyParts.length === 0 || !equipment) {
        alert('Please select at least one body part and equipment type');
        return;
    }
    
    // Generate workout exercises
    currentExercises = [];
    selectedBodyParts.forEach(part => {
        const exercises = workoutExercises[part]?.[equipment] || [];
        exercises.forEach(exercise => {
            currentExercises.push({
                name: exercise,
                duration: 60 // 60 seconds per exercise
            });
        });
    });
    
    // Shuffle exercises for variety
    currentExercises = currentExercises.sort(() => Math.random() - 0.5);
    
    // Display workout plan
    exerciseList.innerHTML = currentExercises.map((exercise, index) => `
        <div class="exercise-item">
            <div class="exercise-name">${index + 1}. ${exercise.name}</div>
            <div class="exercise-details">Duration: ${exercise.duration} seconds</div>
            <div class="exercise-description">${exerciseDescriptions[exercise.name] || ''}</div>
        </div>
    `).join('');
    
    workoutPlan.style.display = 'block';
    timerSection.style.display = 'block';
    
    // Reset timer
    currentExerciseIndex = 0;
    updateTimerDisplay();
    workoutPlan.scrollIntoView({ behavior: 'smooth' });
});

// Timer functionality
function updateTimerDisplay() {
    if (currentExercises.length === 0) return;
    
    const exercise = currentExercises[currentExerciseIndex];
    currentExercise.textContent = `${currentExerciseIndex + 1}. ${exercise.name}`;
    timerSeconds = exercise.duration;
    timerText.textContent = formatTime(timerSeconds);
    
    // Reset progress circle
    const circumference = 2 * Math.PI * 90;
    timerProgress.style.strokeDashoffset = circumference;
}

function startWorkoutTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    const circumference = 2 * Math.PI * 90;
    let remaining = timerSeconds;
    
    timerInterval = setInterval(() => {
        remaining--;
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            timerText.textContent = '00:00';
            
            // Auto-advance to next exercise after 2 seconds
            setTimeout(() => {
                if (currentExerciseIndex < currentExercises.length - 1) {
                    currentExerciseIndex++;
                    updateTimerDisplay();
                    startWorkoutTimer();
                } else {
                    // Workout complete
                    alert('Workout complete! Great job!');
                    resetWorkoutTimer();
                }
            }, 2000);
            
            return;
        }
        
        timerText.textContent = formatTime(remaining);
        
        // Update progress circle
        const offset = circumference - (remaining / timerSeconds) * circumference;
        timerProgress.style.strokeDashoffset = offset;
    }, 1000);
    
    startTimer.style.display = 'none';
    pauseTimer.style.display = 'inline-block';
}

function pauseWorkoutTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        startTimer.style.display = 'inline-block';
        pauseTimer.style.display = 'none';
    }
}

function resetWorkoutTimer() {
    pauseWorkoutTimer();
    currentExerciseIndex = 0;
    updateTimerDisplay();
    startTimer.style.display = 'inline-block';
    pauseTimer.style.display = 'none';
}

function nextWorkoutExercise() {
    if (currentExerciseIndex < currentExercises.length - 1) {
        currentExerciseIndex++;
        updateTimerDisplay();
        pauseWorkoutTimer();
    }
}

// Add event listeners for timer controls
if (startTimer) startTimer.addEventListener('click', startWorkoutTimer);
if (pauseTimer) pauseTimer.addEventListener('click', pauseWorkoutTimer);
if (resetTimer) resetTimer.addEventListener('click', resetWorkoutTimer);
if (nextExercise) nextExercise.addEventListener('click', nextWorkoutExercise);
}

// ===== MINDFULNESS PAGE FUNCTIONALITY =====

function initMindfulnessPage() {
const breathingCircle = document.getElementById('breathingCircle');
const breathingText = document.getElementById('breathingText');
const breathingToggle = document.getElementById('breathingToggle');
const timeOptions = document.querySelectorAll('.time-option');
const meditationTime = document.getElementById('meditationTime');
const meditationStart = document.getElementById('meditationStart');
const meditationPause = document.getElementById('meditationPause');
const meditationReset = document.getElementById('meditationReset');
const soundButtons = document.querySelectorAll('.sound-button');
const soundStatus = document.getElementById('soundStatus');
const totalSessions = document.getElementById('totalSessions');
const totalMinutes = document.getElementById('totalMinutes');
const currentStreak = document.getElementById('currentStreak');

let breathingActive = false;
let meditationSeconds = 300; // 5 minutes default
let meditationInterval = null;
let meditationRunning = false;
let selectedTimeOption = null;

// Breathing exercise
if (breathingToggle && breathingCircle && breathingText) {
    breathingToggle.addEventListener('click', () => {
        breathingActive = !breathingActive;
        
        if (breathingActive) {
            breathingToggle.textContent = 'Stop Breathing Exercise';
            breathingCircle.classList.add('inhale');
            breathingText.textContent = 'Inhale';
            
            // Breathing cycle: 4s inhale, 4s exhale
            breathingTimer = setInterval(() => {
                if (breathingCircle.classList.contains('inhale')) {
                    breathingCircle.classList.remove('inhale');
                    breathingCircle.classList.add('exhale');
                    breathingText.textContent = 'Exhale';
                } else {
                    breathingCircle.classList.remove('exhale');
                    breathingCircle.classList.add('inhale');
                    breathingText.textContent = 'Inhale';
                }
            }, 4000);
            
            // Track session
            trackMindfulnessSession(4); // 4 minutes for breathing exercise
        } else {
            breathingToggle.textContent = 'Start Breathing Exercise';
            breathingCircle.classList.remove('inhale', 'exhale');
            breathingText.textContent = 'Click to Start';
            clearInterval(breathingTimer);
        }
    });
}

// Meditation timer
if (timeOptions && meditationTime) {
    timeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            timeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            selectedTimeOption = option;
            
            // Set meditation time
            meditationSeconds = parseInt(option.dataset.time);
            meditationTime.textContent = formatTime(meditationSeconds);
        });
    });
    
    // Set default to 5 minutes
    if (timeOptions[0]) {
        timeOptions[0].click();
    }
}

function startMeditation() {
    if (meditationRunning) return;
    
    meditationRunning = true;
    meditationStart.style.display = 'none';
    meditationPause.style.display = 'inline-block';
    
    let remaining = meditationSeconds;
    meditationTime.textContent = formatTime(remaining);
    
    meditationInterval = setInterval(() => {
        remaining--;
        
        if (remaining <= 0) {
            clearInterval(meditationInterval);
            meditationTime.textContent = '00:00';
            meditationRunning = false;
            meditationStart.style.display = 'inline-block';
            meditationPause.style.display = 'none';
            
            // Track session
            trackMindfulnessSession(meditationSeconds / 60);
            
            // Play completion sound
            const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
            audio.play();
            
            return;
        }
        
        meditationTime.textContent = formatTime(remaining);
    }, 1000);
}

function pauseMeditation() {
    if (!meditationRunning) return;
    
    clearInterval(meditationInterval);
    meditationRunning = false;
    meditationStart.style.display = 'inline-block';
    meditationPause.style.display = 'none';
}

function resetMeditation() {
    pauseMeditation();
    meditationTime.textContent = formatTime(meditationSeconds);
}

if (meditationStart) meditationStart.addEventListener('click', startMeditation);
if (meditationPause) meditationPause.addEventListener('click', pauseMeditation);
if (meditationReset) meditationReset.addEventListener('click', resetMeditation);

// Ambient sounds
if (soundButtons && soundStatus) {
    soundButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = button.dataset.sound;
            const audioPath = `audio/${sound}.mp3`;

            // If this button is already playing, stop it
            if (button.classList.contains('playing')) {
                if (currentSound) {
                    currentSound.pause();
                    currentSound.currentTime = 0;
                    currentSound = null;
                }
                soundButtons.forEach(btn => btn.classList.remove('playing'));
                soundStatus.textContent = 'Sound stopped';
                return;
            }

            // Stop any other sound
            if (currentSound) {
                currentSound.pause();
                currentSound.currentTime = 0;
                currentSound = null;
                soundButtons.forEach(btn => btn.classList.remove('playing'));
            }

            // Play new sound
            try {
                const audio = new Audio(audioPath);
                audio.loop = true;
                audio.volume = 0.5;
                audio.play();
                currentSound = audio;
                button.classList.add('playing');
                soundStatus.textContent = `Playing ${sound} sounds...`;
            } catch (error) {
                console.error('Error playing sound:', error);
                soundStatus.textContent = 'Error playing sound. Please try again.';
            }
        });
    });
}

// Session tracking
function trackMindfulnessSession(minutes) {
    const today = new Date().toDateString();
    const sessions = loadFromStorage('mindfulnessSessions', []);
    
    // Add new session
    sessions.push({
        date: today,
        minutes: minutes,
        type: minutes === 4 ? 'breathing' : 'meditation'
    });
    
    saveToStorage('mindfulnessSessions', sessions);
    updateSessionStats();
}

function updateSessionStats() {
    const sessions = loadFromStorage('mindfulnessSessions', []);
    
    // Total sessions
    totalSessions.textContent = sessions.length;
    
    // Total minutes
    const totalMins = sessions.reduce((sum, session) => sum + session.minutes, 0);
    totalMinutes.textContent = totalMins;
    
    // Current streak (consecutive days with at least one session)
    let streak = 0;
    const today = new Date();
    let checkDate = new Date(today);
    
    while (true) {
        const dateStr = checkDate.toDateString();
        const hasSession = sessions.some(session => session.date === dateStr);
        
        if (hasSession) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    currentStreak.textContent = streak;
}

// Initialize session stats
updateSessionStats();
}

// ===== CONTACT PAGE FUNCTIONALITY =====

function initContactPage() {
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const faqQuestions = document.querySelectorAll('.faq-question');

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }
        
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }
        
        if (!message) {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = '';
        }
        
        if (!isValid) return;
        
        // Simulate form submission
        contactForm.classList.add('loading');
        
        setTimeout(() => {
            // Save message to localStorage
            const messages = loadFromStorage('contactMessages', []);
            messages.push({
                name: name,
                email: email,
                message: message,
                date: new Date().toISOString()
            });
            
            saveToStorage('contactMessages', messages);
            
            // Show success message
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            contactForm.classList.remove('loading');
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        }, 1500);
    });
}

// FAQ functionality
if (faqQuestions) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');
            
            // Toggle active class
            question.classList.toggle('active');
            answer.classList.toggle('active');
            
            // Update toggle symbol
            if (question.classList.contains('active')) {
                toggle.textContent = '−';
            } else {
                toggle.textContent = '+';
            }
            
            // Close other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                    otherQuestion.querySelector('.faq-toggle').textContent = '+';
                }
            });
        });
    });
}
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
// Get current page
currentPage = getCurrentPage();

// Initialize navigation
initNavigation();

// Initialize page-specific functionality
switch(currentPage) {
    case 'home':
    case 'index':
        initHomePage();
        break;
    case 'recipes':
        initRecipesPage();
        break;
    case 'calculator':
        initCalculatorPage();
        break;
    case 'workout':
        initWorkoutPage();
        break;
    case 'mindfulness':
        initMindfulnessPage();
        break;
    case 'contact':
        initContactPage();
        break;
}

// Add loading animation to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.type === 'submit' || this.classList.contains('submit-button')) {
            this.classList.add('loading');
            
            // Remove loading class after operation completes
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        }
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections and cards
    document.querySelectorAll('section, .card, .feature-card').forEach(el => {
        observer.observe(el);
    });
}

console.log(`GreenBite ${currentPage} page initialized successfully!`);
});

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('js/service-worker.js');
  });
}