import React from 'react';

export type SubjectComment = {
  id: string;
  memberIcon: string;
  memberNickName: string;
  showStatus: string;
  createTime: string;
  content: string;
  memberCity: string;
  contentRender?: () => React.ReactNode;
};
