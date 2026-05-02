let boxSize = 20;       
let positionY = 250;    
let vitesse = 3;        
let marge = 30;         

// Paramètres de la fluidité
let rayonInfluence = 180; // Zone d'influence un peu plus large pour une apparition progressive
let amplitudeVague = 150; // Amplitude du grandissement

function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(20);
  
  // --- 1. Mouvement du cercle blanc ---
  positionY += vitesse;
  
  let rayon = boxSize / 2;
  let limiteBas = height - marge - rayon;
  let limiteHaut = marge + rayon;
  
  if (positionY > limiteBas || positionY < limiteHaut) {
    vitesse = vitesse * -1;
  }
  
  // --- 2. Dessin des cercles (Invisibles au repos) ---
  let spacing = height / 15;
  
  for (let i = 0; i < 15; i++) {
    let yCercle = i * spacing + spacing / 2;
    
    let distance = positionY - yCercle;
    let effet = 0;
    
    // Calcul de l'onde fluide
    if (abs(distance) < rayonInfluence) {
      let angle = map(abs(distance), 0, rayonInfluence, PI, 0);
      effet = cos(angle); 
    }
    
    // Si l'effet est quasi nul, on ne dessine rien (ou opacité 0)
    if (effet > 0.01) {
      let w = 400 + (effet * amplitudeVague);
      let h = 80 + (effet * amplitudeVague * 0.15);
      
      // L'opacité suit exactement l'intensité de la vague (0 à 255)
      // Au repos, effet=0 donc opacite=0 -> INVISIBLE
      let opacite = effet * 255; 
      stroke(255, opacite);
      
      ellipse(width / 2, yCercle, w, h);
    }
    // Si effet <= 0.01, on ne fait rien : le cercle reste invisible
  }
  
  // --- 3. Dessin du cercle blanc (Toujours visible) ---
  stroke(255);
  noFill();
  ellipse(width / 2, positionY, boxSize, boxSize);
}