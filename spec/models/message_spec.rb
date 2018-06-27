require 'rails_helper'

RSpec.describe Message , type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with message_body' do
        expect(build(:message, image: nil)).to be_valid
      end
      it 'is valid with image' do
        expect(build(:message, message_body: nil)).to be_valid
      end
      it 'is valid with both message_body and image' do
        expect(build(:message)).to be_valid
      end
    end
    context 'cannot save' do
      it 'is invalid w/o message_body and image' do
        message = build(:message, message_body: nil, image: nil)
        message.valid?
        expect(message.errors[:message_body]).to include('を入力してください')
      end
      it 'is invalid w/o group_id' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end
      it 'is invalid w/o user_id' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end
  end
end
