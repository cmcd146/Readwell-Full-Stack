# == Schema Information
#
# Table name: bookshelves
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookshelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
