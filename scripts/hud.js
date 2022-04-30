function createHUD(canvas) {
    let skipNextNGenBtn = createButton('Skip Next Gen')
    skipNextNGenBtn.mousePressed(skipNextNGen);
    skipNextNGenBtn.parent("HUD");

    let simSpeedController = new Controller('SimSpeed', 0, 0, 0, 20, SIMSPEED, 1, 'HUD');
    let skipGenAmountController = new Controller('SkipGenAmount', 0, 0, 1, 10, 1, 1, 'HUD');
    let mutationRateController = new Controller('MutationRateController', 0, 0, 0, 0.5, mutationRate, 0.05, 'HUD');
    let popSizeController = new Controller('PopSizeController', 0, 0, 1, 50, popSize, 1, 'HUD');


    let HUDComponents = {'simSpeedController': simSpeedController,
                         'skipGenAmountController': skipGenAmountController,
                         'mutationRateController': mutationRateController,
                         'popSizeController': popSizeController
                        };
    return HUDComponents;
}
  
function skipNextNGen() {
    let skipGenAmount = HUD.skipGenAmountController.slider.value();
    SKIPNGEN = currentGen + skipGenAmount;
}
  
class Controller {
    constructor(text, x, y, min, max, defaultValue, step, div) {
        this.text = text;
        this.defaultValue = defaultValue;
        this.slider = createSlider(min, max, defaultValue, step);
        this.paragraph = createP(this.text + ' (' + this.slider.value() + ')');

        this.button = createButton('Reset');
        
        if (div) {
        this.paragraph.parent("HUD");
        this.button.parent("HUD");
        this.slider.parent("HUD");
        }

        this.paragraph.position(x, y, 'relative');
        this.slider.position(x, y, 'relative').style('width', '150px');
        this.button.position(x, y, 'relative');
        
        this.button.mousePressed(this.resetSlider.bind(this));
        this.slider.input(this.changeParagraph.bind(this));
    }
    resetSlider() {
        this.slider.value(this.defaultValue);
        this.paragraph.html(this.text + ' (' + this.slider.value() + ')');
    }
    changeParagraph() {
        this.paragraph.html(this.text + ' (' + this.slider.value() + ')');
    }
}