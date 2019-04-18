import { SourceAnimator } from "./animations/SourceAnimator";
import { StageSources } from "./stage/StageSources";
import { FullscreenToggler } from "./fullscreen/FullscreenToggler";
import { SourceHoldersTransformer } from "./transforms/SourceHoldersTransformer";
import { SlideChanger } from "./slide/SlideChanger";
import { EventsControllers } from "./events-controllers/EventsControllers";
import { GlobalResizingController } from "./sizes/GlobalResizingController";
import { SlideSwiping } from "./slide-swiping/SlideSwiping";
import { ProperSourceController } from "./sources/ProperSourceController";
import { SourceComponentGetter } from "./sources/creating/SourceComponentGetter";
import { RefactoredSourceComponentGetter } from "./sources/creating/RefactoredSourceComponentGetter";
import { LightboxUnmounter } from "./main-component/LightboxUnmounter";
import { LightboxCloser } from "./main-component/closing/LightboxCloser";
import { LightboxOpener } from "./main-component/opening/LightboxOpener";
import { LightboxInitializer } from "./main-component/LightboxInitializer";

/**
 * @class
 * @param { FsLightbox } fsLightbox
 */
export function Core(fsLightbox) {
    // we are setting up core to this scope because in core objects we use another core objects
    // so we need core to be already defined
    fsLightbox.core = this;

    this.stageSources = new StageSources(fsLightbox);
    this.sourceFactory = new SourceComponentGetter(fsLightbox);
    this.sourceComponentGetter = new RefactoredSourceComponentGetter(fsLightbox);
    this.sourceAnimator = new SourceAnimator(fsLightbox);
    this.properSourceController = new ProperSourceController(fsLightbox);
    this.fullscreenToggler = new FullscreenToggler(fsLightbox);
    this.sourceHoldersTransformer = new SourceHoldersTransformer(fsLightbox);
    this.slideChanger = new SlideChanger(fsLightbox);
    this.slideSwiping = new SlideSwiping(fsLightbox);
    this.globalResizingController = new GlobalResizingController(fsLightbox);
    this.eventsControllers = new EventsControllers(fsLightbox);
    this.lightboxUnmounter = new LightboxUnmounter(fsLightbox);
    this.lightboxCloser = new LightboxCloser(fsLightbox);
    this.lightboxOpener = new LightboxOpener(fsLightbox);
    this.lightboxInitializer = new LightboxInitializer(fsLightbox);
}