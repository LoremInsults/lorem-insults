'use babel';

import {
    CompositeDisposable
} from 'atom';

var _ = require("underscore");

export default {
    subscriptions: null,

    activate(state) {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'lorem-insults:addInsult': function() {
                var insultsList = ['Thou misbegotten milk-livered bladder! You are as rheumatic as two dry toasts. Out of my sight! Thou dost infect my eyes. Thou fobbing unchin-snouted devil-mon! Thou cullionly spur-galled puttock! Thou pribbling rough-hewn horn-beast! Thou dankish onion-eyed clotpole! Thou dankish onion-eyed clotpole! Thou paunchy dread-bolted giglet! Thou currish common-kissing boar-pig! Thou churlish flap-mouthed fustilarian!',
                    'Thou surly doghearted bladder! Thou wimpled pox-marked whey-face! Thou qualling milk-livered measle! You are a tosser, wanker, git and mankey! A nutter, a lazy sod, a cream faced loon! Thou art as loathsome as a toad. Peace, ye fatguts! I do desire we may be better strangers.  Thou art a flesh-monger, fool and coward. You scullion, your rampillian, you fustilarian. I’ll tickle your catastrophe. Thou art as fat as butter.',
                    'There’s no more faith in thee than a stewed prune. Thou art a boil, a plague sore, an embossed carbunkle in my corrupted blood. Away you three inch fool! Thou art a natural coward without instinct. You, minion, are too saucy. Thou art the best of cutthroats. A weasel has not such a spleen as you are toss’d with. Your virginity breeds mites, much like a cheese. Thou leathern-jerkin, crystal button, knot-pated, agatering, puke-stocking, caddis-garter, smooth tongue, Spanish pouch. Thou art the son and heir of a mongrel bitch.',
                    'You base football-player! You crooked-nose knave! You puterell, you skalemar. You hedge-born levereter, you bedswerver fopdoodle! Ye olde mucksprout and mumblecrust. You rakefile skobberlotcher. Thou subtle, perjur’d, false, disloyal man! Thou art like a toad; ugly and venomous. A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality. Thou are pigeon-liver’d and lack gall. Thine face is not worth sunburning. You are as a candle, the better burnt out.',
                    'Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch! That trunk of humours, that bolting-hutch of beastliness, that swollen parcel of dropsies, that huge bombard of sack, that stuffed cloak-bag of guts, that roasted Manningtree ox with pudding in his belly, that reverend vice, that grey Iniquity, that father ruffian, that vanity in years? You starvelling, you eel-skin, you dried neat’s-tongue, you bull’s-pizzle, you stock-fish–O for breath to utter what is like thee!-you tailor’s-yard, you sheath, you bow-case, you vile standing tuck!'
                ];
                atom.workspace.getActiveTextEditor().insertText(_.sample(insultsList));
            }
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    }
};
