import type { IWorkerThreadAction } from './index';
import BaseAction from '../common/base-action';
import { CookieActionType } from '../common/action-type';

export default class Cookie extends BaseAction {
    protected threadAction: IWorkerThreadAction;

    /**
     * 到主线程获取 cookie
     */
    public getCookie(): Promise<WorkerReponse.Cookie.Cookie> {
        return this.controller.requestPromise(CookieActionType.Cookie);
    }

    protected addActionHandler(): void {}
}
