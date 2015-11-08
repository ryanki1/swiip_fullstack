/**
 * Created by ryanki10 on 05/11/15.
 */

import { NowShowingController } from './nowShowing.controller';

describe('nowShowingController', () => {

  beforeEach(() => {
    angular.mock.module('swiipFullstack');
  });

  it('notShowingController instance is available', inject((nowShowingCtrl: NowShowingController) => {
    expect(nowShowingCtrl).not.toBeNull();
  }));

  describe('initialisation of nowShowingController instance is correct', () => {
    it('there is a showing today', inject((nowShowingCtrl: NowShowingController) => {
      expect(nowShowingCtrl.showing.today).toEqual('Minions II');
    }));
  });



});
